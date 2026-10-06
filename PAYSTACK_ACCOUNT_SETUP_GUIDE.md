# Paystack Account Setup Guide - StriveGhana

## 📋 Your Payment Details

**Mobile Money (for receiving donations):**
- Phone: **+233542524571** (0542524571)

**Bank Account (for settlements):**
- Account Number: **9040001870275**

---

## 🚀 Step-by-Step Setup Process

### Step 1: Create Your Paystack Account

1. **Go to Paystack Website**
   - Visit: https://paystack.com
   - Click **"Get Started"** or **"Sign Up"**

2. **Fill in Business Information**
   ```
   Business Name: StriveGhana
   Email: striveghana@gmail.com
   Phone Number: +233542524571 (or 0542524571)
   Password: [Create a strong password]
   Country: Ghana
   Business Type: Non-Profit Organization / NGO
   ```

3. **Verify Your Email**
   - Check your email inbox (striveghana@gmail.com)
   - Click the verification link from Paystack
   - This activates your account

### Step 2: Complete Your Business Profile

1. **Log in to Paystack Dashboard**
   - Go to https://dashboard.paystack.com
   - Enter your email and password

2. **Go to Settings → Business Profile**
   - Click on **Settings** (gear icon)
   - Select **Business Profile**

3. **Fill in Organization Details**
   ```
   Business Name: StriveGhana
   Business Type: Non-Profit / NGO
   Business Address: 99 BLK IX Ejisuman Near Family Hospital, Ejisu, Ashanti
   Phone: +233542524571
   Email: striveghana@gmail.com
   Website: striveghana.org (or your Vercel URL)
   ```

### Step 3: Add Your Bank Account for Settlements

This is where Paystack will send the money you receive from donations.

1. **Go to Settings → Settlement Accounts**
   - Click **Settings** → **Settlement Accounts**
   - Click **"Add Settlement Account"**

2. **Enter Your Bank Details**
   ```
   Bank Name: [Select your bank from dropdown]
   Account Number: 9040001870275
   Account Name: [Will auto-populate after verification]
   ```

3. **Verify Your Account**
   - Paystack will verify the account number with your bank
   - Make sure the account name matches your business name
   - If it doesn't match, you may need to provide additional documents

4. **Set as Primary Account**
   - Once verified, set this as your primary settlement account
   - All donations will be sent here automatically

### Step 4: Configure Mobile Money (Optional but Recommended)

Mobile Money allows donors in Ghana to pay directly from their phones.

1. **Go to Settings → Payment Channels**
   - Click **Settings** → **Payment Channels**
   - Find **Mobile Money** section

2. **Enable Mobile Money**
   - Toggle **Mobile Money** to ON
   - Select networks: MTN, Vodafone, AirtelTigo

3. **Mobile Money Settlement**
   - Your Mobile Money number: **+233542524571**
   - Note: Paystack typically settles to bank accounts, not mobile money
   - Mobile Money is for receiving payments, not settlements

### Step 5: Get Your API Keys

1. **Go to Settings → API Keys & Webhooks**
   - Click **Settings**
   - Select **API Keys & Webhooks**

2. **Copy Your Keys**
   
   **Test Keys (for testing):**
   - Test Public Key: `pk_test_xxxxxxxxxxxxx`
   - Test Secret Key: `sk_test_xxxxxxxxxxxxx` (keep this private!)
   
   **Live Keys (for real money):**
   - Live Public Key: `pk_live_xxxxxxxxxxxxx`
   - Live Secret Key: `sk_live_xxxxxxxxxxxxx` (keep this private!)

3. **Important:**
   - Only use **Public Keys** in your website
   - Never share or expose **Secret Keys**
   - Start with **Test Keys** for testing

### Step 6: Business Verification (Required for Live Payments)

To accept real money, Paystack needs to verify your business.

1. **Go to Settings → Business Verification**
   - Click **Settings** → **Business Verification**
   - Click **"Start Verification"**

2. **Upload Required Documents**
   
   **For NGO/Non-Profit:**
   - [ ] Business Registration Certificate (if registered)
   - [ ] Valid ID (Ghana Card, Passport, or Driver's License)
   - [ ] Proof of Address (utility bill, bank statement)
   - [ ] Bank Statement (showing account 9040001870275)
   - [ ] Letter of Authorization (if applicable)

3. **Submit for Review**
   - Upload all documents
   - Click **"Submit for Verification"**
   - Wait 1-3 business days for approval

4. **Check Verification Status**
   - You'll receive an email when approved
   - Check dashboard for status updates

### Step 7: Add API Key to Your Website

Once you have your API keys:

#### For Testing (Use Test Key First)

1. **Add to Vercel**
   - Go to https://vercel.com
   - Open your StriveGhana project
   - Go to **Settings** → **Environment Variables**
   - Click **"Add New"**
   - Name: `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
   - Value: `pk_test_your_actual_test_key_here`
   - Environment: **Production**
   - Click **Save**

2. **Redeploy Your Site**
   - Go to **Deployments** tab
   - Click **"Redeploy"** on latest deployment
   - Wait 2-3 minutes for build to complete

#### For Live Payments (After Verification)

1. **Update Environment Variable**
   - Go back to **Settings** → **Environment Variables**
   - Find `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
   - Click **Edit**
   - Replace test key with: `pk_live_your_actual_live_key_here`
   - Click **Save**

2. **Redeploy Again**
   - Redeploy your site to use the live key

---

## 🧪 Testing Your Setup

### Test with Test Keys

1. **Use Paystack Test Cards**
   - Card Number: **4084084084084081**
   - Expiry: Any future date (e.g., 12/25)
   - CVV: 123

2. **Test Mobile Money**
   - Use any Ghana mobile number
   - Paystack will simulate the payment
   - No real money is charged

3. **Check Dashboard**
   - Go to Paystack Dashboard → Transactions
   - You should see your test transactions

### Go Live with Real Payments

1. **Verify Checklist:**
   - [ ] Business verified by Paystack
   - [ ] Bank account added and verified
   - [ ] Live Public Key obtained
   - [ ] Live Key added to Vercel
   - [ ] Website redeployed

2. **Make a Small Test Donation**
   - Use your own card to donate $1-5
   - Check if it appears in Paystack Dashboard
   - Verify money settles to your bank account

---

## 💰 How Settlements Work

### Settlement Schedule
- **Frequency:** T+1 (Next business day)
- **Example:** Donation on Monday → Money in bank on Tuesday
- **Weekends:** Donations on Friday settle on Monday

### Settlement Process
1. Donor makes donation on your website
2. Paystack processes the payment
3. Money is held by Paystack for 1 business day
4. Paystack transfers to your bank account: **9040001870275**
5. You receive email notification

### Transaction Fees
Paystack charges:
- **Local Cards:** 1.5% + GHS 0.50
- **International Cards:** 3.9% + GHS 0.50
- **Mobile Money:** 1.5% + GHS 0.50

**Example:**
- Donation: GHS 100
- Fee: GHS 2.00 (1.5% + 0.50)
- You receive: GHS 98.00

---

## 📞 Support & Help

### Paystack Support
- **Email:** support@paystack.com
- **Phone:** +234 1 888 3888
- **Live Chat:** Available in dashboard
- **Help Center:** https://support.paystack.com

### Common Issues

**Issue: Bank Account Not Verifying**
- Solution: Contact your bank to confirm account is active
- Ensure account name matches business name
- Try again or contact Paystack support

**Issue: Business Verification Taking Long**
- Solution: Usually takes 1-3 business days
- Check email for any requests for additional documents
- Contact Paystack support if delayed beyond 5 days

**Issue: Mobile Money Not Working**
- Solution: Ensure Mobile Money is enabled in Payment Channels
- Verify donor has sufficient balance
- Check network availability

---

## ✅ Setup Checklist

Use this checklist to track your progress:

### Account Setup
- [ ] Created Paystack account with email: striveghana@gmail.com
- [ ] Verified email address
- [ ] Completed business profile
- [ ] Added phone: +233542524571

### Payment Setup
- [ ] Added bank account: 9040001870275
- [ ] Bank account verified
- [ ] Set as primary settlement account
- [ ] Enabled Mobile Money payments

### API Keys
- [ ] Copied Test Public Key
- [ ] Added Test Key to Vercel
- [ ] Tested donation with test card
- [ ] Verified test transaction in dashboard

### Business Verification
- [ ] Uploaded business documents
- [ ] Uploaded ID document
- [ ] Uploaded proof of address
- [ ] Submitted for verification
- [ ] Received verification approval

### Go Live
- [ ] Copied Live Public Key
- [ ] Updated Vercel with Live Key
- [ ] Redeployed website
- [ ] Made test donation with real card
- [ ] Verified money settled to bank account

---

## 🎯 Quick Reference

**Your Details:**
- Mobile Money: +233542524571
- Bank Account: 9040001870275
- Email: striveghana@gmail.com
- Website: striveghana.org

**Paystack Links:**
- Dashboard: https://dashboard.paystack.com
- Sign Up: https://paystack.com
- Support: support@paystack.com

**Test Card:**
- Number: 4084084084084081
- Expiry: 12/25
- CVV: 123

---

**You're all set! Follow these steps and you'll be accepting donations in no time! 🎉**

For any questions, refer to `PAYSTACK_SETUP.md` for more detailed information.
