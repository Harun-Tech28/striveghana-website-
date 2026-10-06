# Payment Setup Guide for Strive Ghana Website

## ✅ What's Been Implemented

### 1. **International Payment Support**
- ✅ Credit/Debit Card payments (Visa, Mastercard, Amex)
- ✅ Mobile Money for Ghana (MTN, Vodafone, AirtelTigo)
- ✅ Payment method selection with visual cards
- ✅ Visa and Mastercard logos displayed

### 2. **Contact Information Added**
- ✅ Phone: **+233 24 892 4349**
- ✅ Email: striveghana@gmail.com
- ✅ Contact info displayed in:
  - Footer (all pages)
  - Donate page
  - Contact page

### 3. **Enhanced Donation Form**
- ✅ Payment method selector (Card vs Mobile Money)
- ✅ Phone number field for Mobile Money payments
- ✅ Support for international donors
- ✅ Multiple donation types (General, Sponsor, Zakat, Sadaqat)
- ✅ One-time and monthly recurring options

## 🔧 Next Steps to Enable Real Payments

### Option 1: Stripe (Recommended for International Cards)

**Why Stripe?**
- Accepts Visa, Mastercard, Amex globally
- Secure PCI-compliant payment processing
- Easy integration
- Supports recurring payments

**Setup Steps:**

1. **Create Stripe Account**
   - Go to https://stripe.com
   - Sign up for a free account
   - Complete business verification

2. **Get API Keys**
   - Go to Developers → API keys
   - Copy your Publishable key and Secret key

3. **Add to Environment Variables**
   Create `.env.local` file:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
   STRIPE_SECRET_KEY=sk_live_xxxxx
   ```

4. **Update DonationForm.tsx**
   Replace the simulation code with actual Stripe integration:
   ```typescript
   import { loadStripe } from '@stripe/stripe-js'
   
   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
   
   // In onSubmit function:
   const stripe = await stripePromise
   const response = await fetch('/api/create-payment-intent', {
     method: 'POST',
     body: JSON.stringify(data)
   })
   ```

### Option 2: Paystack (Good for Ghana + International)

**Why Paystack?**
- Popular in Ghana
- Supports Mobile Money (MTN, Vodafone, AirtelTigo)
- Also accepts international cards
- Lower fees for African transactions

**Setup Steps:**

1. **Create Paystack Account**
   - Go to https://paystack.com
   - Sign up and verify your business

2. **Get API Keys**
   - Go to Settings → API Keys & Webhooks
   - Copy your Public and Secret keys

3. **Install Paystack**
   ```bash
   npm install @paystack/inline-js
   ```

4. **Update DonationForm.tsx**
   ```typescript
   import PaystackPop from '@paystack/inline-js'
   
   const paystack = new PaystackPop()
   paystack.newTransaction({
     key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
     email: data.email,
     amount: data.amount * 100, // in pesewas
     currency: 'GHS',
     channels: ['card', 'mobile_money'],
     onSuccess: (transaction) => {
       // Handle success
     }
   })
   ```

### Option 3: Flutterwave (Alternative)

**Why Flutterwave?**
- Supports Ghana Mobile Money
- International card payments
- Multiple African currencies

**Setup:** Similar to Paystack
- Website: https://flutterwave.com

## 📱 Mobile Money Integration

For Ghana-specific Mobile Money (MTN, Vodafone, AirtelTigo):

### Using Paystack:
```typescript
// Paystack automatically handles Mobile Money
// Just ensure 'mobile_money' is in channels array
channels: ['card', 'mobile_money']
```

### Using Hubtel (Ghana-specific):
- Website: https://hubtel.com
- Best for Ghana-only Mobile Money
- Direct integration with all Ghana networks

## 💳 Current Form Features

### Payment Methods:
1. **Credit/Debit Card**
   - Visa ✓
   - Mastercard ✓
   - American Express ✓
   - Works globally

2. **Mobile Money** (Ghana)
   - MTN Mobile Money
   - Vodafone Cash
   - AirtelTigo Money
   - Requires phone number

### Donation Types:
- General Support
- Sponsor a Student ($25/month)
- Zakat
- Sadaqat

### Frequencies:
- One-time donation
- Monthly recurring

## 📞 Contact Information

**Phone:** +233 24 892 4349
**Email:** striveghana@gmail.com

Displayed on:
- Footer (all pages)
- Donate page (alternative payment section)
- Contact page

## 🔒 Security Features

- ✅ SSL/TLS encryption (when deployed)
- ✅ PCI-compliant payment processing (with Stripe/Paystack)
- ✅ Secure form validation
- ✅ No card details stored on your server

## 💰 Recommended Setup

**For Best Results:**

1. **Primary:** Stripe for international cards
2. **Secondary:** Paystack for Ghana Mobile Money
3. **Fallback:** Direct contact (+233 24 892 4349)

This gives you:
- Global reach (Stripe)
- Local convenience (Paystack Mobile Money)
- Personal touch (Phone contact)

## 📝 Testing

### Test Cards (Stripe):
- Success: 4242 4242 4242 4242
- Decline: 4000 0000 0000 0002
- Any future date, any CVC

### Test Mobile Money (Paystack):
- Use test mode keys
- Follow Paystack test documentation

## 🚀 Deployment Checklist

Before going live:
- [ ] Set up Stripe/Paystack account
- [ ] Add production API keys to environment variables
- [ ] Test payment flow end-to-end
- [ ] Verify email confirmations work
- [ ] Test Mobile Money payments
- [ ] Ensure SSL certificate is active
- [ ] Test from different countries
- [ ] Verify phone number is clickable

## 📊 Current Status

✅ **Completed:**
- Payment form UI with method selection
- International card support (UI ready)
- Mobile Money support (UI ready)
- Contact information integrated
- Phone number: +233 24 892 4349
- Responsive design
- Form validation

⏳ **Needs Setup:**
- Stripe/Paystack API integration
- Payment processing backend
- Email confirmations
- Receipt generation

## 🆘 Support

For payment setup assistance:
- **Phone:** +233 24 892 4349
- **Email:** striveghana@gmail.com

---

**Note:** The payment form is fully functional in terms of UI and validation. You just need to connect it to a payment processor (Stripe or Paystack) to start accepting real payments.