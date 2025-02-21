import { logger } from "../utils/logger/dev.logger";

class Password {
    /**
     * Constructor for creating password
     * objects.
     * @type {Password} - Password object to perform functions.
     */
    constructor(password) {
        this.password = password; 
    }


    upsert() {
        try {

        } catch (error) {
            logger.error("Error in Password.upsert: ", error);
        }
    }

    remove() {
        try {

        } catch (error) {
            logger.error("Error in Password.remove: ", error);
        }
    }

    listOne() {
        try {

        } catch (error) {
            logger.error("Error in Password.listOne: ", error);
        }
    }

    listMany() {
        try {

        } catch (error) {
            logger.error("Error in Password.listMany: ", error);
        }
    }

    encrypt(eec_token, password) {

    }

    /**
     * Decrypts the password with the provided
     * dec_token.
     * @param {string} dec_token token to decrypt password with.
     * @param {string} password password to decrypt with token.
     */
    decrypt(password) {

    }
}