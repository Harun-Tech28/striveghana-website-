# Fix Paystack Payment Error - Step by Step

## The Problem
You're seeing: **"No active channel to process transaction. Please contact merchant"**

This means your Paystack account doesn't have payment channels activated yet.

---

## Solution: Activate Payment Channels (5 Minutes)

### Step 1: Log into Paystack Dashboard
1. Go to: **https://dashboard.paystack.com**
2. Log in with your account credentials
3. Make sure you're in **TEST MODE** (toggle at top right)

### Step 2: Navigate to Settings
1. Click **"Settings"** in the left sidebar
2. Click **"Preferences"**

### Step 3: Activate Payment Channels
Look for the **"Payment Channels"** section. You should see:

- ☐ **Card Payments** (Visa, Mastercard, Verve)
- ☐ **Mobile Money** (MTN, Vodafone, AirtelTigo)
- ☐ **Bank Transfer**
- ☐ **USSD**

**Enable at least "Card Payments"** by checking the box.

### Step 4: Save Changes
Click **"Save"** or **"Update"** button at the bottom.

---

## Alternative: Complete Business Profile

If you can't find Payment Channels, you may need to complete your business profile first:

1. Go to **Settings** → **Business Profile**
2. Fill in:
   - **Business Name**: StriveGhana
   - **Business Type**: Non-Profit Organization / NGO
   - **Business Address**: Your address in Ghana
   - **Phone Number**: Your contact number
   - **Business Description**: Youth empowerment and new Muslim convert support
3. Click **"Save"**
4. Then go back to **Settings** → **Preferences** → **Payment Channels**

---

## After Activation

Once you've activated the channels:

1. **Refresh your donation page**: http://localhost:3001/donate
2. **Try donating again**
3. **Use test card**:
   ```
   Card Number: 4084084084084081
   Expiry: 12/25
   CVV: 123
   ```

---

## Still Not Working?

### Check These:
1. ✅ You're in **TEST MODE** (not Live Mode)
2. ✅ Card Payments is **enabled** (checked)
3. ✅ You clicked **Save** after enabling
4. ✅ You refreshed the donation page

### Contact Paystack Support:
If channels are enabled but still not working:
- **Email**: support@paystack.com
- **Live Chat**: Click the chat icon in dashboard
- **Phone**: +234 1 888 3881

Tell them: *"I enabled payment channels in test mode but getting 'No active channel' error"*

---

## What Happens After You Fix This?

✅ Donation form will work perfectly
✅ Test payments will process successfully
✅ You'll see transactions in your Paystack dashboard
✅ Donors will receive confirmation emails

---

## Quick Test After Fix

1. Go to: http://localhost:3001/donate
2. Fill in donation form
3. Click "Continue to Payment"
4. Enter test card: **4084084084084081**
5. Complete payment
6. You should see: "Thank you for your donation!"

---

**This is the ONLY thing blocking your payment system. Once you activate the channels in your Paystack dashboard, everything will work!** 🎉
