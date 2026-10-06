# Contact Form Backend Setup Guide

## 🎯 What You Get

✅ **Full Data Ownership** - All contact form submissions saved to your MongoDB database
✅ **Email Notifications** - Instant email alerts when someone contacts you
✅ **Auto-Reply** - Automatic thank you email sent to the person who contacted you
✅ **Professional Control** - View, manage, and export all contact submissions
✅ **Secure** - Data encrypted in transit and at rest

---

## 📦 What's Been Added

### New Files Created:
1. `src/lib/mongodb.ts` - MongoDB connection utility
2. `src/models/Contact.ts` - Contact data model
3. `src/lib/email.ts` - Email sending utility with Nodemailer
4. `src/app/api/contact/route.ts` - API endpoint for contact form
5. Updated `src/components/forms/ContactForm.tsx` - Now uses the new API

### Packages Installed:
- `mongoose` - MongoDB object modeling
- `nodemailer` - Email sending

---

## 🚀 Setup Instructions

### Step 1: Create MongoDB Atlas Account (Free)

1. **Go to MongoDB Atlas**
   - Visit: https://www.mongodb.com/cloud/atlas/register
   - Click "Try Free"

2. **Sign Up**
   - Use email: striveghana@gmail.com
   - Create a password
   - Verify your email

3. **Create a Cluster**
   - Choose **FREE** tier (M0 Sandbox)
   - Select region: **AWS / eu-west-1 (Ireland)** or closest to Ghana
   - Cluster Name: `StriveGhana`
   - Click "Create Cluster" (takes 3-5 minutes)

4. **Create Database User**
   - Go to **Database Access** (left sidebar)
   - Click "Add New Database User"
   - Username: `striveghana`
   - Password: [Generate a strong password - SAVE THIS!]
   - Database User Privileges: **Read and write to any database**
   - Click "Add User"

5. **Whitelist IP Address**
   - Go to **Network Access** (left sidebar)
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for Vercel)
   - Or add: `0.0.0.0/0`
   - Click "Confirm"

6. **Get Connection String**
   - Go to **Database** (left sidebar)
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string:
   ```
   mongodb+srv://striveghana:<password>@striveghana.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
   - Replace `<password>` with your actual password
   - Add database name: `/striveghana` before the `?`
   - Final format:
   ```
   mongodb+srv://striveghana:YOUR_PASSWORD@striveghana.xxxxx.mongodb.net/striveghana?retryWrites=true&w=majority
   ```

### Step 2: Set Up Gmail for Sending Emails

1. **Use Gmail Account**
   - Email: striveghana@gmail.com

2. **Enable 2-Step Verification**
   - Go to: https://myaccount.google.com/security
   - Click "2-Step Verification"
   - Follow the setup process

3. **Create App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other (Custom name)"
   - Name it: "StriveGhana Website"
   - Click "Generate"
   - **SAVE THE 16-CHARACTER PASSWORD** (you'll need this)

### Step 3: Add Environment Variables Locally

1. **Update `.env.local` file**
   ```env
   # Paystack (already there)
   NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_key

   # MongoDB Atlas
   MONGODB_URI=mongodb+srv://striveghana:YOUR_PASSWORD@striveghana.xxxxx.mongodb.net/striveghana?retryWrites=true&w=majority

   # Gmail Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=striveghana@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password

   # Notification Email
   NOTIFICATION_EMAIL=striveghana@gmail.com

   # Admin API Key (generate a random string)
   ADMIN_API_KEY=your-secure-random-key-12345
   ```

2. **Test Locally**
   ```bash
   npm run dev
   ```
   - Go to http://localhost:3000/contact
   - Fill out the form and submit
   - Check your email for notifications

### Step 4: Add Environment Variables to Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com
   - Open your StriveGhana project

2. **Add Environment Variables**
   - Go to **Settings** → **Environment Variables**
   - Add each variable:

   | Name | Value |
   |------|-------|
   | `MONGODB_URI` | Your MongoDB connection string |
   | `EMAIL_HOST` | smtp.gmail.com |
   | `EMAIL_PORT` | 587 |
   | `EMAIL_USER` | striveghana@gmail.com |
   | `EMAIL_PASSWORD` | Your 16-char app password |
   | `NOTIFICATION_EMAIL` | striveghana@gmail.com |
   | `ADMIN_API_KEY` | Your secure random key |

3. **Set Environment**
   - For each variable, select: **Production**, **Preview**, **Development**

4. **Save and Redeploy**
   - Click "Save"
   - Go to **Deployments**
   - Click "Redeploy" on latest deployment

---

## 📧 How It Works

### When Someone Submits the Contact Form:

1. **Form Submission**
   - User fills out contact form on your website
   - Clicks "Send Message"

2. **Data Saved to MongoDB**
   - Contact information saved to your database
   - Includes: name, email, phone, subject, message, timestamp

3. **Email Notifications Sent**
   - **To You:** Email notification with all contact details
   - **To Them:** Auto-reply thanking them for contacting you

4. **Success Message**
   - User sees confirmation message
   - Form resets for next submission

### Email Templates:

**Notification Email (to you):**
- Professional HTML template
- Shows all contact details
- Clickable email and phone links
- Timestamp in Ghana timezone

**Auto-Reply Email (to them):**
- Branded StriveGhana template
- Thanks them for contacting
- Shows your contact information
- Includes Quranic verse

---

## 🔍 Viewing Contact Submissions

### Option 1: MongoDB Atlas Dashboard

1. Go to https://cloud.mongodb.com
2. Click "Browse Collections"
3. Select database: `striveghana`
4. Select collection: `contacts`
5. View all submissions

### Option 2: API Endpoint (Programmatic Access)

```bash
# Get all contacts
curl -H "Authorization: Bearer your-admin-api-key" \
  https://your-site.vercel.app/api/contact

# Get unread contacts only
curl -H "Authorization: Bearer your-admin-api-key" \
  https://your-site.vercel.app/api/contact?unread=true

# Get with pagination
curl -H "Authorization: Bearer your-admin-api-key" \
  https://your-site.vercel.app/api/contact?limit=20&skip=0
```

### Option 3: Build an Admin Dashboard (Future Enhancement)

You can create an admin page to view and manage contacts:
- `/admin/contacts` - View all submissions
- Mark as read/unread
- Reply directly
- Export to CSV

---

## 🧪 Testing

### Test Locally:

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Go to Contact Page**
   - http://localhost:3000/contact

3. **Submit Test Form**
   - Fill out all fields
   - Click "Send Message"

4. **Check Results**
   - ✅ Success message appears
   - ✅ Email received at striveghana@gmail.com
   - ✅ Auto-reply received at your test email
   - ✅ Data appears in MongoDB Atlas

### Test on Production:

1. **Deploy to Vercel**
   - Push changes to GitHub
   - Vercel auto-deploys

2. **Test Live Site**
   - Go to your production URL
   - Submit contact form
   - Verify emails and database

---

## 🔒 Security Features

✅ **Input Validation** - All fields validated before saving
✅ **Email Validation** - Proper email format checking
✅ **Rate Limiting** - Prevent spam (can be added)
✅ **Secure Connection** - MongoDB uses TLS/SSL
✅ **API Authentication** - Admin endpoints require API key
✅ **Environment Variables** - Sensitive data not in code

---

## 📊 Data Structure

### Contact Document in MongoDB:

```javascript
{
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com",
  phone: "+233542524571",
  subject: "volunteer: I want to help",
  message: "I'm interested in volunteering...",
  createdAt: ISODate("2024-01-20T10:30:00Z"),
  read: false
}
```

---

## 🛠️ Troubleshooting

### Issue: Emails Not Sending

**Check:**
1. Gmail App Password is correct
2. 2-Step Verification is enabled
3. Environment variables are set in Vercel
4. Check Vercel deployment logs for errors

**Solution:**
- Verify EMAIL_USER and EMAIL_PASSWORD in Vercel
- Test with a different email service if needed

### Issue: MongoDB Connection Failed

**Check:**
1. Connection string is correct
2. Password doesn't contain special characters (URL encode if needed)
3. IP whitelist includes `0.0.0.0/0`
4. Database user has correct permissions

**Solution:**
- Copy connection string again from MongoDB Atlas
- Ensure `/striveghana` database name is in the string

### Issue: Form Submission Fails

**Check:**
1. API route is accessible: `/api/contact`
2. Check browser console for errors
3. Check Vercel function logs

**Solution:**
- Redeploy from Vercel dashboard
- Check all environment variables are set

---

## 📈 Future Enhancements

### Possible Additions:

1. **Admin Dashboard**
   - View all contacts in a nice UI
   - Mark as read/unread
   - Reply directly from dashboard
   - Export to CSV/Excel

2. **Email Templates**
   - Customizable email templates
   - Different templates for different inquiry types

3. **Spam Protection**
   - Add reCAPTCHA
   - Rate limiting
   - Honeypot fields

4. **Analytics**
   - Track form submission rates
   - Popular inquiry types
   - Response time tracking

5. **CRM Integration**
   - Sync with Google Sheets
   - Integration with CRM systems
   - Automated follow-ups

---

## 📞 Support

**MongoDB Atlas Support:**
- Docs: https://docs.atlas.mongodb.com
- Support: https://support.mongodb.com

**Nodemailer Support:**
- Docs: https://nodemailer.com
- GitHub: https://github.com/nodemailer/nodemailer

**Gmail App Passwords:**
- Guide: https://support.google.com/accounts/answer/185833

---

## ✅ Setup Checklist

- [ ] Created MongoDB Atlas account
- [ ] Created cluster and database user
- [ ] Whitelisted IP addresses
- [ ] Got MongoDB connection string
- [ ] Enabled Gmail 2-Step Verification
- [ ] Created Gmail App Password
- [ ] Added environment variables to `.env.local`
- [ ] Tested locally
- [ ] Added environment variables to Vercel
- [ ] Deployed to production
- [ ] Tested on live site
- [ ] Received test email notifications
- [ ] Verified data in MongoDB Atlas

---

**Your contact form backend is now professional, secure, and fully functional! 🎉**

All contact submissions are saved to your database and you'll receive instant email notifications!
