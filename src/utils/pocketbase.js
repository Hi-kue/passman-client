import PocketBase from "pocketbase";
import { config } from "dotenv";

config();

export const pb = () => {
  if (!process.env.PRIVATE_POCKETBASE_URL || process.env.PRIVATE_POCKETBASE_URL === "") {
    throw new Error("PRIVATE_POCKETBASE_UR is not aptly defined.");
  }

  const pbase = new PocketBase(process.env.PRIVATE_POCKETBASE_URL);
  pbase.autoCancellation(false);
  pbase.authStore.loadFromCookie(document.cookie);

  return {
    pb: pbase,
    auth: {
      email: process.env.PRIVATE_POCKETBASE_EMAIL,
      password: process.env.PRIVATE_POCKETBASE_PASSWORD,
    },
  };
};
