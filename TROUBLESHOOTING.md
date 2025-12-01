# Email Troubleshooting Guide

## Issue: Form Submission Succeeds but No Email Received

### Step 1: Check Server Console Logs

When you submit the form, check your terminal/console where the Next.js server is running. You should see detailed logs like:

```
📧 Attempting to send email notification...
   From: your-email@gmail.com
   To: poojaryvarun44@gmail.com
   SMTP Host: smtp.gmail.com
   SMTP Port: 587
```

### Step 2: Common Issues and Solutions

#### ❌ Error: "Email configuration missing"

**Problem:** `.env.local` file is missing or doesn't have SMTP credentials.

**Solution:**
1. Create `.env.local` file in the root directory
2. Add the following:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=poojaryvarun44@gmail.com
   SMTP_PASSWORD=your-app-password-here
   OWNER_EMAIL=poojaryvarun44@gmail.com
   ```
3. Restart your development server (`npm run dev`)

#### ❌ Error: "EAUTH" or "Invalid login"

**Problem:** Wrong SMTP credentials or using regular Gmail password instead of App Password.

**Solution:**
1. For Gmail, you MUST use an App Password, not your regular password
2. Enable 2-Step Verification on your Google account
3. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Omkar Decor" as the name
   - Copy the 16-character password
   - Use it as `SMTP_PASSWORD` in `.env.local`

#### ❌ Error: "ECONNECTION" or "ETIMEDOUT"

**Problem:** Cannot connect to SMTP server.

**Solution:**
1. Check your internet connection
2. Verify SMTP settings:
   - Gmail: `smtp.gmail.com:587`
   - Outlook: `smtp-mail.outlook.com:587`
3. Check if firewall is blocking port 587
4. Try using port 465 with `SMTP_SECURE=true`

#### ❌ Error: "SMTP connection failed"

**Problem:** SMTP server rejected the connection.

**Solution:**
1. Verify your email and password are correct
2. Check if your email provider requires special settings
3. For Gmail, make sure "Less secure app access" is not the issue (use App Password instead)

### Step 3: Test Email Configuration

You can test your email configuration using the test endpoint:

1. Open your browser's developer console (F12)
2. Run this JavaScript code:
   ```javascript
   fetch('/api/contact', {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ action: 'test-email' })
   })
   .then(res => res.json())
   .then(data => console.log(data));
   ```

Or use curl:
```bash
curl -X PUT http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"action":"test-email"}'
```

### Step 4: Check Email Settings

1. **Check Spam Folder:** Emails might be going to spam
2. **Check Email Filters:** Gmail might be filtering the emails
3. **Verify Recipient Email:** Make sure `poojaryvarun44@gmail.com` is correct
4. **Check Email Quota:** Make sure your email account isn't full

### Step 5: Verify Environment Variables

Make sure your `.env.local` file:
- ✅ Is in the root directory (same level as `package.json`)
- ✅ Has no spaces around the `=` sign
- ✅ Has no quotes around values (unless necessary)
- ✅ Is loaded (restart server after changes)

Example of correct format:
```env
SMTP_USER=poojaryvarun44@gmail.com
SMTP_PASSWORD=abcd efgh ijkl mnop
```

### Step 6: Check Server Logs

Look for these log messages in your server console:

**Success:**
```
✅ SMTP connection verified successfully
✅ Email notification sent successfully!
   Message ID: <...>
```

**Failure:**
```
❌ Email configuration missing
❌ SMTP connection failed: ...
❌ Error sending email: ...
```

### Step 7: Alternative Solutions

If Gmail continues to have issues, try:

1. **Use a Different Email Provider:**
   - Outlook/Hotmail
   - Yahoo
   - Your domain's email (if you have one)

2. **Use an Email Service:**
   - SendGrid (free tier available)
   - Mailgun (free tier available)
   - AWS SES
   - Resend

3. **Check Network:**
   - Some networks block SMTP ports
   - Try from a different network
   - Use a VPN if necessary

### Quick Checklist

- [ ] `.env.local` file exists in root directory
- [ ] `SMTP_USER` is set correctly
- [ ] `SMTP_PASSWORD` is an App Password (for Gmail)
- [ ] 2-Step Verification is enabled (for Gmail)
- [ ] Server was restarted after changing `.env.local`
- [ ] Checked spam folder
- [ ] Checked server console logs for errors
- [ ] Tested email configuration using test endpoint

### Still Not Working?

1. Check the server console for specific error messages
2. Verify all environment variables are set correctly
3. Try the test endpoint to isolate the issue
4. Check if your email provider has specific requirements
5. Consider using a dedicated email service (SendGrid, Mailgun, etc.)

### Getting Help

When asking for help, provide:
1. Error message from server console
2. Your `.env.local` configuration (remove passwords!)
3. Email provider you're using
4. Steps you've already tried




