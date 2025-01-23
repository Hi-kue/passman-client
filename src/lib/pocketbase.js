import PocketBase from "pocketbase";


if (!process.env.PRIVATE_POCKETBASE_URL || process.env.PRIVATE_POCKETBASE_URL === "") {
    throw new Error("PRIVATE_POCKETBASE_UR is not set.");
    
} else {
    const pb = new PocketBase(process.env.PRIVATE_POCKETBASE_URL);
    pb.autoCancellation(false);
    return pb;
}

export default pb;