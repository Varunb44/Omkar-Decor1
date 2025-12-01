# Email Setup - Step by Step Instructions

## ⚠️ IMPORTANT: You Must Complete This Setup to Receive Emails

Your contact form is working (contacts are being saved), but **emails are not being sent** because the email configuration is missing.

## Problem Identified

❌ **Missing `.env.local` file** - This file contains your email credentials

## Solution: Setup Gmail App Password

### Step 1: Enable 2-Step Verification on Gmail

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** (left sidebar)
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the prompts to enable 2-Step Verification

### Step 2: Generate App Password

1. Go to: https://myaccount.google.com/apppasswords
   - Or: Google Account → Security → 2-Step Verification → App passwords
2. Select **Mail** as the app
3. Select **Other (Custom name)** as the device
4. Enter "Omkar Decor" as the name
5. Click **Generate**
6. **Copy the 16-character password** (it looks like: `abcd efgh ijkl mnop`)
   - ⚠️ **You can only see this password once!** Save it immediately.

### Step 3: Update `.env.local` File

1. Open the `.env.local` file in your project root
2. Replace `your-app-password-here` with the 16-character App Password you just generated
3. Make sure there are **NO SPACES** around the `=` sign
4. The file should look like this:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=poojaryvarun44@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
OWNER_EMAIL=poojaryvarun44@gmail.com
```

**Important:**
- Remove any spaces in the App Password (if it shows as `abcd efgh ijkl mnop`, use `abcdefghijklmnop`)
- Do NOT use quotes around the password
- Do NOT use your regular Gmail password - only use the App Password

### Step 4: Restart Your Development Server

1. Stop your server (press `Ctrl+C` in the terminal)
2. Start it again: `npm run dev`
3. **This is important!** Next.js only loads `.env.local` when the server starts.

### Step 5: Test the Email

1. Go to your contact form: http://localhost:3000/contact
2. Submit a test form
3. Check your email inbox at `poojaryvarun44@gmail.com`
4. Check the **Spam folder** if you don't see it in inbox
5. Check your server console for email logs

### Step 6: Verify It's Working

Check your server console. You should see:

```
📧 Attempting to send email notification...
   From: poojaryvarun44@gmail.com
   To: poojaryvarun44@gmail.com
   SMTP Host: smtp.gmail.com
   SMTP Port: 587
✅ SMTP connection verified successfully
✅ Email notification sent successfully!
   Message ID: <...>
```

If you see errors, check the troubleshooting guide below.

## Troubleshooting

### Error: "Email configuration missing"
- ✅ Make sure `.env.local` file exists in the root directory
- ✅ Restart your development server after creating/updating `.env.local`

### Error: "EAUTH" or "Invalid login"
- ✅ Make sure you're using an **App Password**, not your regular password
- ✅ Make sure 2-Step Verification is enabled
- ✅ Remove any spaces from the App Password
- ✅ Make sure there are no quotes around the password

### Error: "ECONNECTION" or "ETIMEDOUT"
- ✅ Check your internet connection
- ✅ Try again - sometimes Gmail temporarily blocks connections

### Email Not Received?
- ✅ Check your **Spam folder**
- ✅ Check server console for error messages
- ✅ Verify the App Password is correct
- ✅ Make sure server was restarted after updating `.env.local`

## Quick Test

You can test your email configuration by running this in your browser console (F12):

```javascript
fetch('/api/contact', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ action: 'test-email' })
})
.then(res => res.json())
.then(data => {
  console.log('Test Result:', data);
  if (data.success) {
    console.log('✅ Email test successful!');
  } else {
    console.error('❌ Email test failed:', data.error);
  }
});
```

## Still Having Issues?

1. Check `TROUBLESHOOTING.md` for detailed troubleshooting
2. Check your server console for specific error messages
3. Verify all steps above were completed correctly
4. Make sure you're using the App Password (16 characters), not your regular password

## Summary

✅ Contacts are being saved successfully (4 contacts found in `data/contacts.json`)
❌ Emails are not being sent because `.env.local` was missing
✅ `.env.local` file has been created
⚠️ **You need to add your Gmail App Password to complete the setup**

After adding the App Password and restarting the server, emails should start working!




