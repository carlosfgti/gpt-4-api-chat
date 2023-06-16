import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);
