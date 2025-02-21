import logger from "../utils/logger/dev.logger.js";
import { pb } from "../utils/pocketbase.js";

export const deleteOne = async (id, collection) => {
  try {
    if (!id) throw new Error("Id provided is either null, empty, or undefined.");
    if (!collection) throw new Error("Collection provided is either null, empty, or undefined.");
    if (typeof id !== "string") throw new Error("Id provided is not of 'String' type.");
    if (typeof collection !== "string") throw new Error("Collection provided is not of 'String' type.");

    const record = await pb.collection(collection).getOne(id);

    if (!record) {
      throw new Error(
        `The provided id (${id}) does not exist in the provided collection (${collection})`,
      );
    }

    await pb.collection(collection).delete(id);
    return {
      success: true,
      record: record,
      id: id,
    };
  } catch (error) {
    if (error instanceof Error) {
      logger.info(`Error encountered on pb.deleteOne: ${error.message}`);
    }
  }
};

export const deleteMany = async (ids, collection) => {
  try {
    if (!ids?.length) throw new Error("ids[n] provided is either null, empty, or undefined.");
    if (!collection) throw new Error("Collection provided is either null, empty, or undefined");
    if (typeof collection !== "string") throw new Error ("Collection provided is not of 'String' type.");
    if (!Array.isArray(ids)) throw new Error ("Ids provided is not of 'Array' type.");

    const records = await pb.collection(collection).getFullList({
      id: ids,
    });

    if (!records) {
      throw new Error(
        `The provided ids (${ids}) do not exist in the provided collection (${collection})`,
      );
    }

    await pb.collection(collection).deleteRecords(records);
    return {
      success: true,
      deleted: {
        records: records,
        ids: ids,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      logger.info(`Error encountered on pb.deleteMany: ${error.message}`);
    }
  }
};
