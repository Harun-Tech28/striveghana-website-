# Deploy Strive Ghana Website to Vercel - Step by Step

## ✅ Vercel CLI is Installed!

Now follow these simple steps to deploy your website:

---

## 🚀 Step 1: Login to Vercel

Open your terminal and run:
```bash
vercel login
```

This will:
1. Open your browser
2. Ask you to sign up or login to Vercel (FREE)
3. You can use:
   - Email
   - GitHub
   - GitLab
   - Bitbucket

**Choose the easiest option for you!**

---

## 🌐 Step 2: Deploy Your Website

After logging in, run:
```bash
vercel
```

Vercel will ask you some questions:

### Question 1: "Set up and deploy?"
**Answer:** `Y` (Yes)

### Question 2: "Which scope?"
**Answer:** Press `Enter` (use your account)

### Question 3: "Link to existing project?"
**Answer:** `N` (No, it's a new project)

### Question 4: "What's your project's name?"
**Answer:** `strive-ghana` or press `Enter` for default

### Question 5: "In which directory is your code located?"
**Answer:** `./` (press Enter)

### Question 6: "Want to override the settings?"
**Answer:** `N` (No)

---

## ⏳ Step 3: Wait for Deployment

Vercel will:
1. ✅ Upload your files
2. ✅ Build your website
3. ✅ Deploy to their servers
4. ✅ Give you a live URL!

This takes about 2-3 minutes.

---

## 🎉 Step 4: Your Website is LIVE!

Vercel will show you:
```
✅ Production: https://strive-ghana.vercel.app
```

**Your website is now live and accessible from anywhere in the world!**

---

## 🔗 Step 5: Connect Your Domain (striveghana.org)

### Option A: Using Vercel Dashboard (Easiest)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click on your project: `strive-ghana`

2. **Add Domain**
   - Click "Settings" tab
   - Click "Domains"
   - Enter: `striveghana.org`
   - Click "Add"

3. **Update DNS Settings**
   Vercel will show you DNS records to add. Go to your domain registrar (where you bought striveghana.org) and add:
   
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for DNS Propagation**
   - Takes 5 minutes to 48 hours
   - Usually works in 10-30 minutes

### Option B: Using Vercel CLI

```bash
vercel domains add striveghana.org
```

---

## 🔄 Update Your Website (After Changes)

Whenever you make changes to your website:

```bash
# Just run this command
vercel --prod
```

Your website will be updated in 2-3 minutes!

---

## 📱 Test Your Live Website

After deployment, test these URLs:

1. **Homepage:** https://strive-ghana.vercel.app
2. **About:** https://strive-ghana.vercel.app/about
3. **Programs:** https://strive-ghana.vercel.app/programs
4. **Donate:** https://strive-ghana.vercel.app/donate
5. **Contact:** https://strive-ghana.vercel.app/contact
6. **Get Involved:** https://strive-ghana.vercel.app/get-involved

---

## 🎯 What You Get with Vercel (FREE)

✅ **Free Hosting** - No cost!
✅ **Automatic SSL** - HTTPS security
✅ **Global CDN** - Fast worldwide
✅ **Automatic Deployments** - Easy updates
✅ **Custom Domain** - Use striveghana.org
✅ **99.99% Uptime** - Always available
✅ **Unlimited Bandwidth** - No limits

---

## 🔐 Environment Variables (For Later)

When you set up Stripe/Paystack payments:

1. Go to Vercel Dashboard
2. Click your project
3. Go to "Settings" → "Environment Variables"
4. Add:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = your_key
   STRIPE_SECRET_KEY = your_secret_key
   ```

---

## 🆘 Troubleshooting

### Problem: "Command not found: vercel"
**Solution:**
```bash
npm install -g vercel
```

### Problem: "Build failed"
**Solution:**
```bash
# Test build locally first
npm run build

# If it works, deploy again
vercel --prod
```

### Problem: "Domain not working"
**Solution:**
- Wait 30 minutes for DNS propagation
- Check DNS settings at your domain registrar
- Make sure you added the correct records

### Problem: "Images not showing"
**Solution:**
- Make sure images are in `public/images/` folder
- Check image file names match exactly
- Redeploy: `vercel --prod`

---

## 📞 Need Help?

**Contact:**
- Phone: +233 24 892 4349
- Email: striveghana@gmail.com

**Vercel Support:**
- Help: https://vercel.com/help
- Docs: https://vercel.com/docs

---

## ✅ Deployment Checklist

- [ ] Vercel CLI installed (`npm install -g vercel`)
- [ ] Logged in to Vercel (`vercel login`)
- [ ] Deployed website (`vercel`)
- [ ] Got live URL (https://strive-ghana.vercel.app)
- [ ] Tested all pages work
- [ ] Added custom domain (striveghana.org)
- [ ] Updated DNS settings
- [ ] Waited for DNS propagation
- [ ] Tested custom domain works
- [ ] Shared with team! 🎉

---

## 🎊 Congratulations!

Your Strive Ghana website is now LIVE on the internet!

**Share your website:**
- https://strive-ghana.vercel.app (or your custom domain)
- Accessible from anywhere in the world
- Works on all devices (mobile, tablet, desktop)
- Secure with HTTPS
- Fast and professional

**Next Steps:**
1. Add real images
2. Set up Stripe/Paystack for payments
3. Test everything
4. Share with your community!

---

**Your website is ready to serve the Ummah! Alhamdulillah! 🕌**