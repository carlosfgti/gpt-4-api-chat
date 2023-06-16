import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

// Load environment variables from .env file
dotenv.config();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
