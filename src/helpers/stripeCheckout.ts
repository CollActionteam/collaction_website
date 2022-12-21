import { loadStripe } from '@stripe/stripe-js';

export default async function checkout(
  item: string,
  mode: 'payment' | 'subscription'
) {
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY ?? '');
  stripe?.redirectToCheckout({
    successUrl: 'https://collaction.org/donate?paymentComplete=1',
    cancelUrl: 'https://collaction.org/donate?paymentComplete=0',
    lineItems: [{ price: item, quantity: 1 }],
    mode: mode,
  });
}
