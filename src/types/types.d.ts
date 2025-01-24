interface Password {
    id: string;
    email: string;
    website_url: string;
    username: string;
    enc_password: string;
    dec_token: Dec_Token;
    notes: string;
}

interface Dec_Token {
    token: string;
    key_shift: number;
}

export {
    Password,
    Dec_Token
}
