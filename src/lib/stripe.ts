import Stripe from "stripe";

if (typeof process.env.STRIPE_SECRET_KEY !== 'string') throw new Error('Stripe key not found');

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-08-16',
    appInfo: {
        name: 'Ignite Shop',
    },
})

