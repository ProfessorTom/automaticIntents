import OpenAI from "openai";

// enum idea came from https://stackoverflow.com/a/53959486
const BotName = Object.freeze({
    OPENAI: 'OpenAI',
    GROQ: 'Groq',
    // ADD MORE BOTS HERE
})

const BotAPIKey = Object.freeze({
    OPENAI: 'OPENAI_API_KEY',
    GROQ: 'GROQ_API_KEY',
    // ADD MORE BOT API KEYS HERE
})

/////////////// Error Map /////////////////
const errorMap = new Map([
    [BotName.OPENAI, BotAPIKey.OPENAI],
    [BotName.GROQ, BotAPIKey.GROQ],
    // ADD MORE ERROR MESSAGES HERE
]);

/////////////// FUNCTIONS /////////////////
function getOpenAIBot() {
    if(process.env.OPENAI_API_KEY) {
        return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    } else {
        return undefined;
    }
}

function getGroqBot() {
    if(process.env.GROQ_API_KEY) {
        return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    } else {
        return undefined;
    }
}

function getUninsatiatedBotError(botName) {
    return `${botName} model was not instantiated. Did you supply an ${errorMap.get(botName)}?`;
}



export { getOpenAIBot, getGroqBot, getUninsatiatedBotError, BotName };

