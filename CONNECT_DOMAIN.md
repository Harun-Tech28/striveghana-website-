# Connect striveghana.org Domain to Vercel

## 🌐 Your Custom Domain: striveghana.org

Follow these steps to connect your domain to your Vercel website.

---

## Step 1: Go to Vercel Dashboard

1. Visit: https://vercel.com/harunadramani951-6011s-projects/strveghana.org
2. Click on your project: **strveghana.org**

---

## Step 2: Add Your Domain

1. Click **"Settings"** tab at the top
2. Click **"Domains"** in the left sidebar
3. In the "Add Domain" field, enter: `striveghana.org`
4. Click **"Add"**

---

## Step 3: Configure DNS Settings

Vercel will show you DNS records to add. You need to add these at your domain registrar (where you bought striveghana.org).

### Option A: Using A Record (Recommended)

Add these DNS records at your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600 (or Auto)

Type: A
Name: www
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

### Option B: Using CNAME Record

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

---

## Step 4: Where to Add DNS Records

### If you bought your domain from:

#### **Namecheap:**
1. Login to Namecheap
2. Go to "Domain List"
3. Click "Manage" next to striveghana.org
4. Click "Advanced DNS"
5. Add the A records shown above

#### **GoDaddy:**
1. Login to GoDaddy
2. Go to "My Products"
3. Click "DNS" next to striveghana.org
4. Add the A records

#### **Google Domains:**
1. Login to Google Domains
2. Click on striveghana.org
3. Go to "DNS"
4. Add custom records

#### **Cloudflare:**
1. Login to Cloudflare
2. Select striveghana.org
3. Go to "DNS"
4. Add A records

---

## Step 5: Wait for DNS Propagation

- **Time:** Usually 10-30 minutes, can take up to 48 hours
- **Check Status:** Visit https://dnschecker.org and enter `striveghana.org`

---

## Step 6: Verify It's Working

Once DNS propagates, your website will be accessible at:

✅ **https://striveghana.org**
✅ **https://www.striveghana.org**

Both will work automatically!

---

## 🎯 Quick DNS Configuration

### Exact Records to Add:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 3600 |
| A | www | 76.76.21.21 | 3600 |

**OR**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | cname.vercel-dns.com | 3600 |

---

## ✅ After Domain is Connected

Your website will be available at:
- **Main:** https://striveghana.org
- **WWW:** https://www.striveghana.org
- **Old URL:** https://strveghana-xxx.vercel.app (still works)

### Benefits:
✅ Professional domain name
✅ Automatic HTTPS/SSL
✅ Better for SEO
✅ Easier to remember
✅ More trustworthy

---

## 🔄 Update Your Website

After connecting the domain, update any hardcoded URLs in your website:

```bash
# Redeploy with updated domain
vercel --prod
```

---

## 📱 Test Your Domain

After DNS propagates, test these URLs:

1. https://striveghana.org
2. https://www.striveghana.org
3. https://striveghana.org/about
4. https://striveghana.org/donate
5. https://striveghana.org/contact

All should work perfectly!

---

## 🆘 Troubleshooting

### Problem: "Domain not found"
**Solution:** Wait longer for DNS propagation (up to 48 hours)

### Problem: "SSL Certificate Error"
**Solution:** Vercel automatically provisions SSL. Wait 5-10 minutes after DNS propagates.

### Problem: "Domain already in use"
**Solution:** Remove the domain from any other Vercel projects first.

### Problem: "DNS records not updating"
**Solution:** 
- Clear your browser cache
- Try incognito/private mode
- Check DNS with: https://dnschecker.org

---

## 📞 Need Help?

**Strive Ghana Contact:**
- Phone: +233 24 892 4349
- Email: striveghana@gmail.com

**Vercel Support:**
- Help: https://vercel.com/help
- Docs: https://vercel.com/docs/concepts/projects/domains

---

## 🎉 Success!

Once your domain is connected:

✅ Your website is at **striveghana.org**
✅ Professional and trustworthy
✅ Easy to share and remember
✅ Automatic HTTPS security
✅ Ready to serve the Ummah!

**Share your website:**
📧 Email: "Visit us at striveghana.org"
📱 Social Media: "Check out striveghana.org"
📄 Flyers: "striveghana.org"

---

**May Allah bless your efforts in serving the Muslim community! 🕌**