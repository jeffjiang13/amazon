  <div align="center">

 <br />
  <img src="public/amazon-png-logo-vector-1.png" width='400' alt="logo" />

  # Amazon Clone

<img src="public/readme.png" alt="logo" />

 <br />
  <p>
Amazon clone (ReactJS, Webhooks, complete Stripe Payments Checkout, Cloud Firestore database, NextAuth, Redux, Google Authentication, Add to Basket Functionality, Tailwind CSS)
  </p>
  <br />
<h3>
    <a href="https://jeff-amazon.vercel.app/">View Demo</a>
</h3>
</div>

<!-- Badges -->

 <br />


<a href="https://jeff-amazon.vercel.app/" target="_blank">![](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)</a>

# About
Welcome to the Amazon Clone project! This project is a comprehensive replication of the renowned Amazon e-commerce platform, developed using a myriad of modern web development technologies. It is designed to showcase the potential and flexibility of these technologies when integrated together, and to provide a practical example of their application.

The Amazon Clone incorporates several features typical of an e-commerce platform:

User Authentication: Leveraging NextAuth and Google Authentication, users can securely sign in to the platform to access personalized features.

Shopping Cart Functionality: Users can add items to their cart and review these items before purchase. They can also remove items from the cart if they change their minds.

Detailed Product Pages: Each product has its own detail page, complete with an image modal for a closer look at the product.

Complete Checkout Process: Integrated with Stripe Payments, the platform supports a seamless and secure checkout process for purchasing items in the user's cart.

Real-time Database: The platform uses Google's Cloud Firestore as a real-time database for storing and retrieving data, ensuring that product details and user data are always up-to-date.

Responsive Design: Tailwind CSS has been utilized to ensure a responsive and aesthetically pleasing design that provides a positive user experience on any device.

This project, deployed on Vercel, exemplifies the capabilities of Next.js combined with Redux Toolkit, and provides a solid starting point for anyone looking to learn more about these technologies or seeking a foundation for a custom e-commerce platform. Happy coding!


# Features
- Next auth/google auth - sign in
- Add to cart and remove from cart
- Detail page with image modal
- Complete Stripe Payments Checkout
- Cloud Firestore database
- Webhooks
- Redux
- Tailwind CSS
- Responsive design
- Deployed on Vercel


# Redux Toolkit example

This example shows how to integrate Next.js with [Redux Toolkit](https://redux-toolkit.js.org).

The **Redux Toolkit** is intended to be the standard way to write Redux logic (create actions and reducers, setup the store with some default middlewares like redux devtools extension). This example demonstrates each of these features with Next.js

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-redux-toolkit&project-name=with-redux-toolkit&repository-name=with-redux-toolkit)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-redux-toolkit with-redux-toolkit-app
# or
yarn create next-app --example with-redux-toolkit with-redux-toolkit-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### TypeScript Setup (optional)

If you haven't already added [TypeScript](https://www.typescriptlang.org/) to your project, follow the [steps in the Next.js documentation](https://nextjs.org/docs/basic-features/typescript). If you are new to TypeScript, go through the Next.js [learning lesson on TypeScript](https://nextjs.org/learn/excel/TypeScript).

Once TypeScript is added, follow the instructions given on the Redux Toolkit [documentation](https://redux-toolkit.js.org/tutorials/TypeScript) to set up and use Redux Toolkit and React-Redux with TypeScript
