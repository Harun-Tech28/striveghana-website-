# Your MongoDB Setup - Quick Guide

## ✅ Your MongoDB Connection String

```
mongodb+srv://umtaz3171sali:<db_password>@cluster0.4qfqnxk.mongodb.net/striveghana?retryWrites=true&w=majority&appName=Cluster0
```

**Username:** `umtaz3171sali`
**Cluster:** `cluster0.4qfqnxk.mongodb.net`
**Database:** `striveghana`

---

## 🔑 What You Need to Do

### Step 1: Get Your MongoDB Password

1. **Go to MongoDB Atlas**
   - Visit: https://cloud.mongodb.com
   - Log in with your account

2. **Find Your Password**
   - If you saved it during setup, use that
   - If you forgot it, you need to reset it:
     - Go to **Database Access** (left sidebar)
     - Find user: `umtaz3171sali`
     - Click **Edit**
     - Click **Edit Password**
     - Choose "Autogenerate Secure Password" or create your own
     - **SAVE THE PASSWORD!**
     - Click **Update User**

### Step 2: Update `.env.local` File

1. **Open `.env.local` file**
2. **Find this line:**
   ```
   MONGODB_URI=mongodb+srv://umtaz3171sali:<db_password>@cluster0.4qfqnxk.mongodb.net/striveghana?retryWrites=true&w=majority&appName=Cluster0
   ```

3. **Replace `<db_password>` with your actual password**
   
   **Example:**
   If your password is `MySecurePass123`, change it to:
   ```
   MONGODB_URI=mongodb+srv://umtaz3171sali:MySecurePass123@cluster0.4qfqnxk.mongodb.net/striveghana?retryWrites=true&w=majority&appName=Cluster0
   ```

   **Important:** If your password contains special characters like `@`, `#`, `$`, etc., you need to URL encode them:
   - `@` becomes `%40`
   - `#` becomes `%23`
   - `$` becomes `%24`
   - `%` becomes `%25`
   - `/` becomes `%2F`

### Step 3: Set Up Gmail App Password

1. **Enable 2-Step Verification**
   - Go to: https://myaccount.google.com/security
   - Click "2-Step Verification"
   - Follow the setup

2. **Create App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other (Custom name)"
   - Name: "StriveGhana Website"
   - Click "Generate"
   - **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

3. **Update `.env.local`**
   Replace this line:
   ```
   EMAIL_PASSWORD=your-gmail-app-password-here
   ```
   
   With your actual app password (remove spaces):
   ```
   EMAIL_PASSWORD=abcdefghijklmnop
   ```

### Step 4: Test Locally

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Go to contact page:**
   ```
   http://localhost:3000/contact
   ```

3. **Submit a test message**
   - Fill out the form
   - Click "Send Message"
   - Check for success message

4. **Verify it worked:**
   - ✅ Check your email (striveghana@gmail.com) for notification
   - ✅ Check MongoDB Atlas:
     - Go to https://cloud.mongodb.com
     - Click "Browse Collections"
     - Select database: `striveghana`
     - Select collection: `contacts`
     - You should see your test submission

---

## 🚀 Deploy to Vercel

Once local testing works, add to Vercel:

1. **Go to Vercel Dashboard**
   - https://vercel.com
   - Open your StriveGhana project

2. **Add Environment Variables**
   - Go to **Settings** → **Environment Variables**
   - Add these (with your actual values):

   ```
   MONGODB_URI=mongodb+srv://umtaz3171sali:YOUR_PASSWORD@cluster0.4qfqnxk.mongodb.net/striveghana?retryWrites=true&w=majority&appName=Cluster0
   
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=striveghana@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   NOTIFICATION_EMAIL=striveghana@gmail.com
   ADMIN_API_KEY=striveghana-admin-key-2024-secure-random
   ```

3. **Redeploy**
   - Go to **Deployments**
   - Click "Redeploy" on latest deployment
   - Wait 2-3 minutes

4. **Test on Live Site**
   - Go to your production URL
   - Submit contact form
   - Check email and MongoDB

---

## 📋 Your Complete `.env.local` File

After filling in your passwords, it should look like this:

```env
# Paystack Configuration
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_key

# MongoDB Atlas
MONGODB_URI=mongodb+srv://umtaz3171sali:YOUR_ACTUAL_PASSWORD@cluster0.4qfqnxk.mongodb.net/striveghana?retryWrites=true&w=majority&appName=Cluster0

# Gmail Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=striveghana@gmail.com
EMAIL_PASSWORD=your16charapppassword

# Notification Email
NOTIFICATION_EMAIL=striveghana@gmail.com

# Admin API Key
ADMIN_API_KEY=striveghana-admin-key-2024-secure-random
```

---

## 🔍 Troubleshooting

### Error: "Authentication failed"
- **Problem:** Wrong MongoDB password
- **Solution:** Reset password in MongoDB Atlas and update `.env.local`

### Error: "Could not connect to MongoDB"
- **Problem:** IP not whitelisted
- **Solution:** 
  1. Go to MongoDB Atlas
  2. Click "Network Access"
  3. Add IP: `0.0.0.0/0` (allow all)

### Error: "Email not sending"
- **Problem:** Wrong Gmail app password or 2-Step not enabled
- **Solution:** 
  1. Enable 2-Step Verification
  2. Create new App Password
  3. Update `.env.local`

---

## ✅ Quick Checklist

- [ ] Got MongoDB password
- [ ] Updated `MONGODB_URI` in `.env.local`
- [ ] Enabled Gmail 2-Step Verification
- [ ] Created Gmail App Password
- [ ] Updated `EMAIL_PASSWORD` in `.env.local`
- [ ] Tested locally (`npm run dev`)
- [ ] Submitted test form
- [ ] Received email notification
- [ ] Verified data in MongoDB Atlas
- [ ] Added variables to Vercel
- [ ] Redeployed to production
- [ ] Tested on live site

---

**Once you complete these steps, your contact form will be fully functional with database storage and email notifications!** 🎉
