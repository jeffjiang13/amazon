import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export default async (req, res) => {
  if (req.method === 'POST') {
    const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        images: [item.image],
        name: item.title,
      },
      unit_amount: item.price * 100,
    },
    description: item.description,
    quantity: 1,
  }));
  try {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1MeQNmGsxXy1NXaYvYxeMJpl"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
} catch (error) {
  console.error('Error creating checkout session:', error); // Log the error
  res.status(500).json({ error: 'Failed to create checkout session.' });
}
} else {
res.setHeader('Allow', 'POST');
res.status(405).end('Method Not Allowed');
}
};
// Use this to test the API and create a session ID
// curl -X POST -is "http://localhost:3000/api/create-checkout-session" -d ""
