import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.PRIVATE_POCKETBASE_URL);

export default pb;