import { buffer } from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("../../../permissions.json");

const fullFillOrder = async (session) => {
  console.log("Full fill order", session);

  try {
    await app
      .firestore()
      .collection("users")
      .doc(session.metadata.email)
      .collection("orders")
      .doc(session.id)
      .set({
        amount: session.amount_total / 100,
        amount_shipping: session.total_details.amount_shipping / 100 || 30,
        images: JSON.parse(session.metadata.images),
        timeStamp: admin.firestore.FieldValue.serverTimestamp(),
      });

    console.log(`Success: order ${session.id} has been added to the DB`);
  } catch (err) {
    console.log("Error during insertion!", err.message);
  }
};

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const requestBuffer = await buffer(req);
      const payload = requestBuffer.toString();
      const sig = req.headers["stripe-signature"];

      const event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);

      if (event.type === "checkout.session.completed") {
        const session = event.data.object;

        try {
          await fullFillOrder(session);
          res.status(200).send("Success");
        } catch (err) {
          res.status(400).send(`Webhook Error: ${err.message}`);
        }
      } else {
        res.status(400).send("Unsupported event type");
      }
    } catch (error) {
      console.log("Error", error.message);
      res.status(400).send(`webhook error: ${error.message}`);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export const config = {
  api: {
    bodyParser: false, // Not needed for webhooks
    externalResolver: true,
  },
};
