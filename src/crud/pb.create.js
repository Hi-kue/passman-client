import logger from "../utils/logger/dev.logger.js";
import { pb } from "../utils/pocketbase.js";

export const create = async (data, collection) => {
  try {
    if (!data) throw new Error("Data provided is either null, empty, or undefined.");
    if (!collection) throw new Error("Collection provided is either null, empty, or undefined.");

    await pb.collection(collection).create(data);
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    if (error instanceof Error) {
      logger.info(`Error encountered on pb.create: ${error.message}`);
    }
  }
};
