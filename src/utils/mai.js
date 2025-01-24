import { Groq, GroqError } from "groq-sdk";

class Mai {
    static VERSION = "1.0.0";
    static DEFAULT_MODEL = "";
    static DEFAULT_SYSTEM_PROMPT = "";

    /**
     * constructor for Maiya class
     * @param {string} base_url base url for Groq.
     * @param {string} api_key api key to make requests for Groq.
     */
    constructor(base_url, api_key) {
        if (!base_url || !api_key) throw new GroqError("BASE_URL and API_KEY are required variables.");
        this.groq = new Groq(
            base_url,
            api_key
        );
        this.model = Maiya.DEFAULT_MODEL;
        this.system_prompt = Maiya.DEFAULT_SYSTEM_PROMPT;
    }

    get model() {
        return this.model;
    }

    /**
     * setter for model to be used when making 
     * a request to Groq
     * @param {string} model model to be used to make a request.
     */
    set model(model) {
        if (!typeof model === "string") {
            throw new Error("provided model must be of type string.");
        }
        this.model = model;
    }

    get system_prompt() {
        return this.system_prompt;
    }

    /**
     * setter for system_prompt to be used when making
     * a request to Groq.
     * @param {string} system_prompt system prompt to be used when making a request to Groq.
     */
    set system_prompt(system_prompt) {
        if (!typeof system_prompt === "string") {
            throw new Error("provided system_prompt must be of type string.");
        }
        this.system_prompt = system_prompt;
    }

    /**
     * Sends a API request to Groq, returns a response 
     * in string format.
     * @param {string} message to be sent to Groq to get a response
     * @returns {Promise<string>} the response from Groq
     */
    async chat(message) {
        try {
            if (!message || !typeof message === "string") {
                throw new Error("message must be of TYPE string.");
            }


            const response = await this.groq.chat.completions.create({
                model: this.model,
                messages: [
                    {
                        role: "system",
                        content: this.system_prompt
                    }, 
                    {
                        role: "user",
                        content: message
                    }
                ]
            }).catch(async (error) => {
                if (error instanceof GroqError) {
                    
                }
            })

            return response.choices[0].message.content;
        } catch (error) {
            if (error instanceof GroqError) {
                throw error;
            }
        }
    }
}


export default Mai;