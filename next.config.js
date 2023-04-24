// next.config.js
module.exports = {
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com", "drive.google.com", 'api.escuelajs.co'],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
