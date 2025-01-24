import PocketBase from "pocketbase";


if (!process.env.PRIVATE_POCKETBASE_URL || process.env.PRIVATE_POCKETBASE_URL === "") {
    throw new Error("PRIVATE_POCKETBASE_UR is not aptly defined.");
    
} else {
    const pb = new PocketBase(process.env.PRIVATE_POCKETBASE_URL);
    pb.autoCancellation(false);
    pb.authStore.loadFromCookie(document.cookie);
    return pb;
}

export default pb;