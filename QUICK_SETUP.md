# Quick Setup Guide - Email Notifications

## Email Configuration

All contact form submissions will be sent to: **poojaryvarun44@gmail.com**

### Step 1: Create `.env.local` file

Create a file named `.env.local` in the root directory with the following content:

```env
# SMTP Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=poojaryvarun44@gmail.com
SMTP_PASSWORD=your-gmail-app-password

# Owner email (where notifications are sent)
OWNER_EMAIL=poojaryvarun44@gmail.com
```

### Step 2: Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Enable **2-Step Verification** (if not already enabled)
3. Go to **Security** → **2-Step Verification** → **App passwords**
4. Select "Mail" as the app and "Other" as the device
5. Copy the generated 16-character password
6. Paste it as `SMTP_PASSWORD` in your `.env.local` file

### Step 3: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to: http://localhost:3000/contact

3. Fill out and submit the form

4. Check your email inbox at `poojaryvarun44@gmail.com`

5. You should receive an email with all the contact form details

### What Happens When a User Submits the Form?

1. ✅ Form data is validated
2. ✅ Data is saved to `data/contacts.json`
3. ✅ Email notification is sent to **poojaryvarun44@gmail.com**
4. ✅ Email includes:
   - User's name
   - User's email
   - User's phone number
   - Event type
   - Event date (if provided)
   - User's message

### Troubleshooting

**Email not received?**
1. **Check Server Console:** Look at your terminal where `npm run dev` is running. You should see detailed logs about email sending.
2. **Verify Configuration:** Make sure `.env.local` file exists with correct credentials
3. **Check Gmail App Password:** Must use App Password, not regular password
4. **Check Spam Folder:** Emails might be filtered to spam
5. **Restart Server:** After changing `.env.local`, restart the development server

**Form submission succeeds but no email?**
- Check server console for error messages (look for ❌ or ⚠️ symbols)
- Common errors:
  - `Email configuration missing` → Create `.env.local` file
  - `EAUTH` → Wrong password or need App Password
  - `ECONNECTION` → Network/firewall issue
- Verify SMTP credentials are correct in `.env.local`
- Test email configuration (see below)

**Test Email Configuration:**
You can test if your email setup works by running this in your browser console:
```javascript
fetch('/api/contact', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ action: 'test-email' })
}).then(r => r.json()).then(console.log);
```

**Need more help?**
- Check `TROUBLESHOOTING.md` for detailed troubleshooting guide
- Check `BACKEND_SETUP.md` for detailed setup instructions
- Review server console logs for specific error messages

