import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Define the contact form data type
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

// Get the data directory path
const dataDir = path.join(process.cwd(), 'data');
const contactsFile = path.join(dataDir, 'contacts.json');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize contacts file if it doesn't exist
if (!fs.existsSync(contactsFile)) {
  fs.writeFileSync(contactsFile, JSON.stringify([], null, 2));
}

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

// Save contact to file
const saveContact = (data: ContactFormData) => {
  try {
    const contacts = JSON.parse(fs.readFileSync(contactsFile, 'utf-8'));
    const newContact = {
      ...data,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    };
    contacts.push(newContact);
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.error('Error saving contact:', error);
    throw error;
  }
};

// Send email notification to owner
const sendEmailNotification = async (data: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  // Owner email - this is where all contact form submissions will be sent
  const ownerEmail = process.env.OWNER_EMAIL || 'poojaryvarun44@gmail.com';
  
  // Check if SMTP configuration exists
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    const errorMsg = 'Email configuration missing. SMTP_USER and SMTP_PASSWORD are required in .env.local';
    console.error('❌', errorMsg);
    console.error('📧 Expected configuration:');
    console.error('   SMTP_USER=your-email@gmail.com');
    console.error('   SMTP_PASSWORD=your-app-password');
    console.error('   OWNER_EMAIL=poojaryvarun44@gmail.com');
    return { success: false, error: errorMsg };
  }

  console.log('📧 Attempting to send email notification...');
  console.log('   From:', process.env.SMTP_USER);
  console.log('   To:', ownerEmail);
  console.log('   SMTP Host:', process.env.SMTP_HOST || 'smtp.gmail.com');
  console.log('   SMTP Port:', process.env.SMTP_PORT || '587');

  try {
    const transporter = createTransporter();

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified successfully');
    } catch (verifyError: any) {
      const errorMsg = `SMTP connection failed: ${verifyError.message}`;
      console.error('❌', errorMsg);
      console.error('   Common issues:');
      console.error('   - Invalid SMTP credentials (check SMTP_USER and SMTP_PASSWORD)');
      console.error('   - Gmail requires App Password (not regular password)');
      console.error('   - 2-Step Verification must be enabled for Gmail');
      console.error('   - Firewall/network blocking SMTP port');
      return { success: false, error: errorMsg };
    }

    const mailOptions = {
      from: `"Omkar Decor Website" <${process.env.SMTP_USER}>`,
      to: ownerEmail,
      subject: `New Contact Form Submission - ${data.eventType || 'General Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); color: #000; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #333; margin-top: 5px; }
            .footer { background: #333; color: #fff; padding: 15px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              <div class="field">
                <div class="label">Event Type:</div>
                <div class="value">${data.eventType || 'Not specified'}</div>
              </div>
              ${data.eventDate ? `
              <div class="field">
                <div class="label">Event Date:</div>
                <div class="value">${new Date(data.eventDate).toLocaleDateString()}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Omkar Decor website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Event Type: ${data.eventType || 'Not specified'}
${data.eventDate ? `Event Date: ${new Date(data.eventDate).toLocaleDateString()}\n` : ''}
Message:
${data.message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email notification sent successfully!');
    console.log('   Message ID:', info.messageId);
    console.log('   Response:', info.response);
    return { success: true };
  } catch (error: any) {
    const errorMsg = error.message || 'Unknown error';
    console.error('❌ Error sending email:', errorMsg);
    console.error('   Error code:', error.code);
    console.error('   Error command:', error.command);
    
    // Provide helpful error messages
    if (error.code === 'EAUTH') {
      console.error('   💡 Solution: Check your SMTP_USER and SMTP_PASSWORD');
      console.error('   💡 For Gmail: Use an App Password, not your regular password');
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      console.error('   💡 Solution: Check your internet connection and SMTP settings');
      console.error('   💡 Verify SMTP_HOST and SMTP_PORT are correct');
    } else if (error.code === 'EMESSAGE') {
      console.error('   💡 Solution: Check email format and recipient address');
    }
    
    return { success: false, error: errorMsg };
  }
};

// POST handler
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save contact to file
    const savedContact = saveContact(body);
    console.log('✅ Contact saved successfully with ID:', savedContact.id);

    // Send email notification and wait for result
    const emailResult = await sendEmailNotification(body);
    
    if (!emailResult.success) {
      console.error('⚠️ Contact saved but email failed:', emailResult.error);
      // Still return success since contact was saved
      return NextResponse.json(
        { 
          message: 'Contact form submitted successfully',
          id: savedContact.id,
          emailSent: false,
          emailError: emailResult.error
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: savedContact.id,
        emailSent: true
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET handler to retrieve contacts (optional - for admin purposes)
export async function GET() {
  try {
    if (!fs.existsSync(contactsFile)) {
      return NextResponse.json({ contacts: [] });
    }

    const contacts = JSON.parse(fs.readFileSync(contactsFile, 'utf-8'));
    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error reading contacts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Test email configuration endpoint
export async function PUT(request: NextRequest) {
  try {
    const { action } = await request.json();
    
    if (action === 'test-email') {
      console.log('🧪 Testing email configuration...');
      
      // Check if SMTP configuration exists
      if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
        return NextResponse.json(
          { 
            success: false,
            error: 'SMTP configuration missing',
            message: 'Please configure SMTP_USER and SMTP_PASSWORD in .env.local'
          },
          { status: 400 }
        );
      }

      const ownerEmail = process.env.OWNER_EMAIL || 'poojaryvarun44@gmail.com';
      
      try {
        const transporter = createTransporter();
        
        // Verify connection
        await transporter.verify();
        console.log('✅ SMTP connection verified');
        
        // Send test email
        const testMailOptions = {
          from: `"Omkar Decor Website" <${process.env.SMTP_USER}>`,
          to: ownerEmail,
          subject: 'Test Email - Omkar Decor Contact Form',
          text: 'This is a test email from the Omkar Decor contact form backend.',
          html: '<p>This is a test email from the Omkar Decor contact form backend.</p>',
        };
        
        const info = await transporter.sendMail(testMailOptions);
        console.log('✅ Test email sent successfully');
        
        return NextResponse.json(
          { 
            success: true,
            message: 'Test email sent successfully',
            messageId: info.messageId,
            to: ownerEmail
          },
          { status: 200 }
        );
      } catch (error: any) {
        console.error('❌ Test email failed:', error);
        return NextResponse.json(
          { 
            success: false,
            error: error.message,
            code: error.code,
            message: 'Failed to send test email. Check your SMTP configuration.'
          },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Error in test endpoint:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

