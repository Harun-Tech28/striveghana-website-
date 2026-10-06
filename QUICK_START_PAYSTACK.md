# Quick Start: Paystack Integration

## ✅ What's Been Done

Your StriveGhana website now has **Paystack payment integration** for:
- 💳 **International Card Payments** (Visa, Mastercard, Amex)
- 📱 **Ghana Mobile Money** (MTN, Vodafone, AirtelTigo)

## 🚀 Next Steps to Go Live

### 1. Get Your Paystack Account (5 minutes)
1. Visit [https://paystack.com](https://paystack.com)
2. Click "Sign Up"
3. Use these details:
   - Email: **striveghana@gmail.com**
   - Phone: **0542524571**
   - Business: **StriveGhana** (Non-Profit)

### 2. Get Your API Key (2 minutes)
1. Log in to Paystack Dashboard
2. Go to **Settings** → **API Keys**
3. Copy your **Test Public Key** (starts with `pk_test_`)

### 3. Add Key to Your Website (1 minute)

**For Local Testing:**
Open `.env.local` file and paste your key:
```
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_actual_key_here
```

**For Live Website (Vercel):**
1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - Name: `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
   - Value: `pk_live_your_live_key` (get live key after verification)
5. Click **Save** and **Redeploy**

### 4. Test It! (2 minutes)
1. Go to your donate page
2. Fill in the form
3. Use Paystack test card: **4084084084084081**
   - Expiry: Any future date
   - CVV: 123
4. Complete payment
5. Check Paystack Dashboard for the transaction

## 📋 For Live Payments

To accept real money, you need to:
1. ✅ Verify your business with Paystack (submit documents)
2. ✅ Add your bank account for settlements
3. ✅ Get your **Live Public Key** (starts with `pk_live_`)
4. ✅ Update Vercel environment variable with live key
5. ✅ Redeploy your website

## 💰 How It Works

### User Flow:
1. User visits `/donate` page
2. Fills donation form (amount, name, email)
3. Selects payment method (Card or Mobile Money)
4. Clicks "Continue to Payment"
5. Paystack popup opens
6. User completes payment
7. Success message shown

### You Receive:
- Instant notification in Paystack Dashboard
- Money settles to your bank account (T+1 business day)
- Transaction details and donor information

## 📞 Need Help?

**StriveGhana:**
- Phone: 0542524571
- WhatsApp: [Chat](https://wa.me/233542524571)
- Email: striveghana@gmail.com

**Paystack Support:**
- Email: support@paystack.com
- Phone: +234 1 888 3888

## 📚 Full Documentation

See `PAYSTACK_SETUP.md` for complete setup guide including:
- Business verification process
- Webhook configuration
- Recurring donations
- Currency conversion
- Transaction fees
- Troubleshooting

---

**Your donation system is ready! Just add your Paystack key and start accepting donations! 🎉**
