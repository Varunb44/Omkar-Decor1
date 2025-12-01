# Backend Setup Guide

This guide will help you set up the backend for the contact form to store submissions and send email notifications.

## Features

✅ **Contact Form Storage**: All contact form submissions are saved to `data/contacts.json`  
✅ **Email Notifications**: Owner receives email notifications when a form is submitted  
✅ **API Endpoint**: `/api/contact` handles form submissions

## Setup Instructions

### 1. Configure Email Settings

Create a `.env.local` file in the root directory of your project:

```env
# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Owner email (where notifications will be sent)
OWNER_EMAIL=poojaryvarun44@gmail.com
```

### 2. Gmail Setup (Recommended)

If you're using Gmail, you'll need to:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this app password as `SMTP_PASSWORD` in your `.env.local` file

### 3. Alternative Email Providers

You can use any SMTP provider. Here are some common configurations:

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=true
```

#### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
```

### 4. Data Storage

Contact form submissions are automatically saved to `data/contacts.json`. This file is:
- Created automatically on first submission
- Ignored by git (for privacy)
- Contains all contact form submissions with timestamps

### 5. Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page: `http://localhost:3000/contact`

3. Fill out and submit the form

4. Check:
   - Success message appears on the page
   - Email notification is sent to the owner
   - Data is saved in `data/contacts.json`

## API Endpoints

### POST `/api/contact`

Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "eventType": "wedding",
  "eventDate": "2024-12-25",
  "message": "Hello, I need decoration services..."
}
```

**Response:**
```json
{
  "message": "Contact form submitted successfully",
  "id": "1234567890"
}
```

### GET `/api/contact`

Retrieve all contact submissions (for admin purposes).

**Response:**
```json
{
  "contacts": [
    {
      "id": "1234567890",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "eventType": "wedding",
      "eventDate": "2024-12-25",
      "message": "Hello...",
      "timestamp": "2024-01-01T12:00:00.000Z"
    }
  ]
}
```

## Troubleshooting

### Email Not Sending

1. **Check Environment Variables**: Ensure `.env.local` is properly configured
2. **Verify App Password**: For Gmail, make sure you're using an App Password, not your regular password
3. **Check SMTP Settings**: Verify SMTP host, port, and security settings
4. **Check Console**: Look for error messages in the server console

### Data Not Saving

1. **Check Permissions**: Ensure the application has write permissions to create the `data/` directory
2. **Check Console**: Look for error messages in the server console

### Form Submission Errors

1. **Check Browser Console**: Look for JavaScript errors
2. **Check Network Tab**: Verify the API request is being made and check the response
3. **Validate Form Data**: Ensure all required fields are filled

## Security Notes

- Never commit `.env.local` to version control (it's already in `.gitignore`)
- Use App Passwords instead of your main account password
- The `data/contacts.json` file is also in `.gitignore` to protect user privacy
- Consider adding rate limiting in production
- Consider adding CAPTCHA to prevent spam

## Production Deployment

For production deployment:

1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Ensure the `data/` directory has write permissions (or consider using a database)
3. Consider using a dedicated email service (SendGrid, Mailgun, etc.) for better deliverability
4. Add rate limiting and spam protection
5. Consider migrating to a proper database (MongoDB, PostgreSQL, etc.) for better scalability

## Future Enhancements

- Database integration (MongoDB, PostgreSQL)
- Admin dashboard to view submissions
- Email templates customization
- SMS notifications
- Automated response emails to customers
- Contact form analytics

