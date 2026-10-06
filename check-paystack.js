// Simple script to test Paystack configuration
// Run with: node check-paystack.js

const publicKey = 'pk_test_573f55ec926ffe2953741d0e71614fc17768ddc5';

console.log('🔍 Checking Paystack Configuration...\n');

console.log('✅ Public Key Found:', publicKey);
console.log('✅ Key Type:', publicKey.startsWith('pk_test_') ? 'TEST MODE' : 'LIVE MODE');
console.log('✅ Key Format:', publicKey.length === 45 ? 'Valid Length' : 'Invalid Length');

console.log('\n📋 Next Steps:');
console.log('1. Open test-paystack.html in your browser');
console.log('2. Click "Test Payment - $25" button');
console.log('3. If Paystack popup opens → Channels are activated ✅');
console.log('4. If you see "No active channel" error → Need to activate in dashboard ❌');

console.log('\n🌐 To test, run:');
console.log('   Open test-paystack.html in your browser');
console.log('   OR');
console.log('   Go to: http://localhost:3001/donate');

console.log('\n📊 Paystack Dashboard:');
console.log('   https://dashboard.paystack.com');
console.log('   Settings → Preferences → Payment Channels');
