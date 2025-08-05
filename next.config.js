// next.config.js
module.exports = {
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com", "drive.google.com"],
    unoptimized: true,
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
