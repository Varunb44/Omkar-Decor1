# Create .env.local File - Quick Guide

## The Problem

Your contact form is working (contacts are being saved), but **emails are not being sent** because the `.env.local` file is missing.

## Quick Fix

### Step 1: Create `.env.local` File

1. In your project root directory (`C:\Users\Admin\Desktop\Omkaar`), create a new file named `.env.local`
2. Copy and paste this content into the file:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=poojaryvarun44@gmail.com
SMTP_PASSWORD=PUT_YOUR_APP_PASSWORD_HERE
OWNER_EMAIL=poojaryvarun44@gmail.com
```

### Step 2: Get Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" and "Other (Custom name)"
3. Enter "Omkar Decor"
4. Click "Generate"
5. Copy the 16-character password (like: `abcd efgh ijkl mnop`)
6. Replace `PUT_YOUR_APP_PASSWORD_HERE` in `.env.local` with this password (remove spaces)

### Step 3: Restart Server

1. Stop your server (Ctrl+C)
2. Run: `npm run dev`
3. Submit a test form
4. Check your email!

## Important Notes

- ⚠️ You MUST use an App Password, not your regular Gmail password
- ⚠️ You MUST enable 2-Step Verification first
- ⚠️ You MUST restart the server after creating/updating `.env.local`
- ⚠️ Remove spaces from the App Password when pasting it

## File Location

The `.env.local` file should be in:
```
C:\Users\Admin\Desktop\Omkaar\.env.local
```

Same directory as `package.json` and `next.config.js`




