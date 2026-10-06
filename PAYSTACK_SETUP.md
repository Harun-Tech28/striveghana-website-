# Paystack Payment Integration Setup Guide

## Overview

Your StriveGhana website now uses **Paystack** for processing donations. Paystack supports:
- ✅ **International Card Payments** (Visa, Mastercard, Amex)
- ✅ **Ghana Mobile Money** (MTN, Vodafone, AirtelTigo)
- ✅ **Bank Transfers**
- ✅ **USSD Payments**

## Step 1: Create Paystack Account

1. Go to [https://paystack.com](https://paystack.com)
2. Click **"Get Started"** or **"Sign Up"**
3. Fill in your organization details:
   - Business Name: **StriveGhana**
   - Email: **striveghana@gmail.com**
   - Phone: **0542524571**
   - Business Type: **Non-Profit/NGO**
4. Verify your email address
5. Complete your business profile

## Step 2: Get Your API Keys

1. Log in to your Paystack Dashboard
2. Go to **Settings** → **API Keys & Webhooks**
3. You'll see two keys:
   - **Test Public Key** (starts with `pk_test_`)
   - **Live Public Key** (starts with `pk_live_`)

### For Testing (Development)
Copy your **Test Public Key** and add it to `.env.local`:

```env
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_actual_test_key_here
```

### For Production (Live Website)
Copy your **Live Public Key** and add it to your Vercel environment variables:

```env
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_live_your_actual_live_key_here
```

## Step 3: Verify Business (For Live Payments)

To accept live payments, you need to verify your business:

1. In Paystack Dashboard, go to **Settings** → **Business Profile**
2. Upload required documents:
   - ✅ Business Registration Certificate (if registered)
   - ✅ Valid ID (Passport, Driver's License, or Ghana Card)
   - ✅ Proof of Address
   - ✅ Bank Account Details for settlements

3. Wait for Paystack to review (usually 1-3 business days)

## Step 4: Configure Settlement Account

1. Go to **Settings** → **Settlement Accounts**
2. Add your bank account where donations will be received:
   - Bank Name
   - Account Number
   - Account Name: **StriveGhana**
3. Verify the account (Paystack will send a small test deposit)

## Step 5: Update Environment Variables

### Local Development (.env.local)
```env
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_test_key
```

### Production (Vercel)
1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Name**: `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
   - **Value**: `pk_live_your_live_key`
   - **Environment**: Production
4. Click **Save**
5. Redeploy your website

## Step 6: Test the Integration

### Test Mode (Using Test Keys)
1. Use test card numbers from Paystack:
   - **Success**: `4084084084084081`
   - **Insufficient Funds**: `4084080000000408`
   - **Declined**: `4084084084084081` (with CVV 408)
   - Expiry: Any future date
   - CVV: Any 3 digits

2. Test Mobile Money:
   - Use any Ghana mobile number
   - Paystack will simulate the payment

### Live Mode (Using Live Keys)
1. Make a small test donation ($1-5)
2. Verify the payment appears in your Paystack Dashboard
3. Check that funds settle to your bank account

## Payment Flow

### For Card Payments:
1. User fills donation form
2. Selects "Credit/Debit Card"
3. Clicks "Donate Now"
4. Paystack popup opens
5. User enters card details
6. Payment processed instantly
7. Success message shown

### For Mobile Money:
1. User fills donation form
2. Selects "Mobile Money"
3. Enters mobile money number
4. Clicks "Donate Now"
5. Paystack sends prompt to phone
6. User approves on phone
7. Payment confirmed

## Currency Conversion

The website displays amounts in **USD**, but Paystack processes in **GHS (Ghana Cedis)**.

Current conversion in code: `USD * 16 = GHS` (approximate)

To update the exchange rate, edit `src/components/forms/DonationForm.tsx`:
```typescript
amount: Math.round(finalAmount * 100 * 16), // Change 16 to current rate
```

## Supported Payment Channels

Paystack supports multiple channels. Your form currently enables:

### Card Payments
- Visa
- Mastercard
- American Express
- Verve

### Mobile Money (Ghana)
- MTN Mobile Money
- Vodafone Cash
- AirtelTigo Money

### Other Channels (Can be enabled)
- Bank Transfer
- USSD
- QR Code

## Transaction Fees

Paystack charges:
- **Local Cards**: 1.5% + GHS 0.50 (capped at GHS 2,000)
- **International Cards**: 3.9% + GHS 0.50
- **Mobile Money**: 1.5% + GHS 0.50

You can choose to:
1. **Absorb fees** (you pay)
2. **Pass to donor** (donor pays)

To pass fees to donor, add to Paystack config:
```typescript
bearer: 'account' // You pay fees
bearer: 'subaccount' // Donor pays fees
```

## Webhooks (Optional but Recommended)

Webhooks notify your server when payments succeed:

1. In Paystack Dashboard, go to **Settings** → **Webhooks**
2. Add webhook URL: `https://striveghana.org/api/paystack/webhook`
3. Copy the **Secret Key**
4. Create webhook handler in your Next.js API route

## Recurring Donations (Monthly)

For monthly donations, you need to:
1. Enable **Subscriptions** in Paystack Dashboard
2. Create subscription plans
3. Update the form to use Paystack subscriptions API

## Support & Resources

### Paystack Resources
- Dashboard: [https://dashboard.paystack.com](https://dashboard.paystack.com)
- Documentation: [https://paystack.com/docs](https://paystack.com/docs)
- Support: support@paystack.com
- Phone: +234 1 888 3888

### Test Cards
- [https://paystack.com/docs/payments/test-payments](https://paystack.com/docs/payments/test-payments)

### Integration Guide
- [https://paystack.com/docs/payments/accept-payments](https://paystack.com/docs/payments/accept-payments)

## Troubleshooting

### "Invalid Public Key" Error
- Check that your public key is correct in `.env.local`
- Restart your development server: `npm run dev`
- For production, redeploy after updating Vercel env variables

### Payment Not Processing
- Verify your Paystack account is active
- Check if you're using test keys in production (or vice versa)
- Ensure business verification is complete for live mode

### Mobile Money Not Working
- Mobile Money only works with Ghana phone numbers
- User must have sufficient balance
- Network must be available

### Funds Not Settling
- Check your settlement account is verified
- Paystack settles T+1 (next business day)
- Check for any holds on your account

## Security Best Practices

1. ✅ **Never expose secret keys** - Only use public keys in frontend
2. ✅ **Use HTTPS** - Paystack requires secure connections
3. ✅ **Verify webhooks** - Always verify webhook signatures
4. ✅ **Test thoroughly** - Use test mode before going live
5. ✅ **Monitor transactions** - Check dashboard regularly

## Going Live Checklist

- [ ] Paystack account created and verified
- [ ] Business documents submitted and approved
- [ ] Settlement bank account added and verified
- [ ] Live public key obtained
- [ ] Environment variable updated in Vercel
- [ ] Test donation completed successfully
- [ ] Webhook configured (optional)
- [ ] Transaction monitoring set up
- [ ] Donor receipt emails configured

## Contact Information

**StriveGhana:**
- Phone: 0542524571
- WhatsApp: [Chat on WhatsApp](https://wa.me/233542524571)
- Email: striveghana@gmail.com

**Paystack Support:**
- Email: support@paystack.com
- Phone: +234 1 888 3888
- Live Chat: Available in dashboard

---

**Your donation system is now ready to accept payments from Ghana and around the world! 🎉**
