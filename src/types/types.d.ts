/**
 * @typedef {Object} Password
 * @property {string} id - Unique identifier for the password
 * @property {string} email - Associated email address
 * @property {string} website_url - URL of the website
 * @property {string} username - Username for the account
 * @property {string} enc_password - Encrypted password string
 * @property {Dec_Token} dec_token - Decryption token object
 * @property {string} notes - Additional notes for the password entry
 */
interface Password {
    id: string;
    email: string;
    website_url: string;
    username: string;
    enc_password: string;
    dec_token: Dec_Token;
    notes: string;
}

/**
 * @typedef {Object} Dec_Token
 * @property {string} token - The token string
 * @property {number} key_shift - The key shift value
 */
interface Dec_Token {
    token: string;
    key_shift: number;
}

export {
    Password,
    Dec_Token
}