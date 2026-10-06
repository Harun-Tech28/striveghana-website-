# How to Save and Deploy Your Strive Ghana Website

## ✅ Your Project is Already Saved!

Your complete website is saved in:
```
C:\Users\user\Desktop\strveghana.org
```

All your files are there and ready to use!

---

## 📦 Option 1: Backup Your Project (Recommended)

### Method 1: Copy to External Drive
1. **Plug in a USB drive or external hard drive**
2. **Copy the entire folder:**
   - Right-click on `strveghana.org` folder on your Desktop
   - Select "Copy"
   - Go to your USB drive
   - Right-click and select "Paste"
3. **Done!** You now have a backup

### Method 2: Compress to ZIP File
1. **Right-click** on the `strveghana.org` folder
2. Select **"Send to" → "Compressed (zipped) folder"**
3. A ZIP file will be created: `strveghana.org.zip`
4. Save this ZIP file to:
   - USB drive
   - Cloud storage (Google Drive, OneDrive, Dropbox)
   - Email it to yourself

---

## 🌐 Option 2: Deploy to the Internet (Make it Live)

### Recommended: Deploy to Vercel (FREE & Easy)

**Why Vercel?**
- ✅ FREE hosting
- ✅ Automatic SSL (HTTPS)
- ✅ Fast global CDN
- ✅ Perfect for Next.js
- ✅ Easy to connect your domain (striveghana.org)

**Steps to Deploy:**

1. **Create a Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or Email
   - It's FREE!

2. **Install Vercel CLI** (Optional but easier)
   ```bash
   npm install -g vercel
   ```

3. **Deploy Your Website**
   
   **Option A: Using Vercel CLI (Easiest)**
   ```bash
   # In your project folder
   cd C:\Users\user\Desktop\strveghana.org
   
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel
   ```
   
   **Option B: Using Vercel Website**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Upload your project folder
   - Click "Deploy"

4. **Your Website is Live!**
   - Vercel will give you a URL like: `striveghana.vercel.app`
   - You can access it from anywhere in the world!

5. **Connect Your Domain (striveghana.org)**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add `striveghana.org`
   - Follow the instructions to update your domain DNS

---

## 🔄 Option 3: Save to GitHub (Version Control)

**Why GitHub?**
- ✅ FREE cloud backup
- ✅ Track all changes
- ✅ Easy to deploy from GitHub
- ✅ Professional standard

**Steps:**

1. **Create GitHub Account**
   - Go to https://github.com
   - Sign up for free

2. **Install Git** (if not installed)
   - Download from https://git-scm.com
   - Install with default settings

3. **Initialize Git in Your Project**
   ```bash
   cd C:\Users\user\Desktop\strveghana.org
   
   # Initialize git
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - Complete Strive Ghana website"
   ```

4. **Create Repository on GitHub**
   - Go to https://github.com/new
   - Name it: `strive-ghana-website`
   - Click "Create repository"

5. **Push to GitHub**
   ```bash
   # Add GitHub as remote
   git remote add origin https://github.com/YOUR_USERNAME/strive-ghana-website.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

6. **Your Code is Now Backed Up on GitHub!**

---

## 📱 Option 4: Deploy to Netlify (Alternative to Vercel)

**Steps:**

1. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up for free

2. **Deploy**
   - Drag and drop your project folder to Netlify
   - Or connect your GitHub repository
   - Netlify will automatically deploy

3. **Get Your Live URL**
   - Netlify gives you a URL like: `striveghana.netlify.app`

---

## 💾 What Files to Keep Safe

### Essential Files (Must Keep):
```
✅ src/ folder (all your code)
✅ public/ folder (images)
✅ package.json
✅ next.config.js
✅ tailwind.config.js
✅ tsconfig.json
✅ README.md
✅ PAYMENT_SETUP.md
```

### Files You Can Delete (Will be regenerated):
```
❌ node_modules/ (can reinstall with npm install)
❌ .next/ (build cache)
❌ .git/ (if you're not using git)
```

---

## 🔐 Before Deploying - Important Steps

### 1. Add Environment Variables
Create `.env.local` file (for production):
```env
# Stripe Keys (when you set up payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key_here
STRIPE_SECRET_KEY=your_secret_key_here

# EmailJS Keys (for contact forms)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 2. Add Your Images
Replace placeholder images in `public/images/`:
- `hero-strive.jpg` - Your Strive logo image
- `islamic-learning.jpg` - Islamic education photo
- `community-brotherhood.jpg` - Community gathering photo

### 3. Test Everything
```bash
# Build for production
npm run build

# Test production build
npm start
```

---

## 📋 Quick Deployment Checklist

- [ ] Backup project to USB/Cloud
- [ ] Add real images to `public/images/`
- [ ] Create Vercel/Netlify account
- [ ] Deploy website
- [ ] Test all pages work
- [ ] Test donation form
- [ ] Test contact form
- [ ] Connect domain (striveghana.org)
- [ ] Set up Stripe/Paystack for payments
- [ ] Set up EmailJS for contact forms
- [ ] Test from mobile phone
- [ ] Share with team!

---

## 🆘 Need Help?

### If Something Goes Wrong:

1. **Project Won't Start?**
   ```bash
   # Delete node_modules and reinstall
   rm -rf node_modules
   npm install
   npm run dev
   ```

2. **Lost Your Files?**
   - Check Desktop: `C:\Users\user\Desktop\strveghana.org`
   - Check Recycle Bin
   - Restore from backup

3. **Deployment Issues?**
   - Check Vercel/Netlify logs
   - Ensure all files are uploaded
   - Check environment variables

### Contact Information:
- **Phone:** +233 24 892 4349
- **Email:** striveghana@gmail.com

---

## 🎉 Your Website is Complete!

### What You Have:
✅ Fully functional Islamic website
✅ Responsive design (mobile, tablet, desktop)
✅ Donation system (ready for Stripe/Paystack)
✅ Contact forms
✅ All pages working
✅ Professional design
✅ Ghana-specific features

### Next Steps:
1. **Backup your project** (USB or Cloud)
2. **Deploy to Vercel** (make it live)
3. **Add real images**
4. **Set up payment processing**
5. **Connect your domain**
6. **Share with the world!**

---

## 📞 Quick Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Install dependencies (if needed)
npm install

# Deploy to Vercel
vercel

# Check for errors
npm run lint
```

---

**Congratulations! Your Strive Ghana website is complete and ready to go live! 🎊**

For any questions, contact: +233 24 892 4349 or striveghana@gmail.com