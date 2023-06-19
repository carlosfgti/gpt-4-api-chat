import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

// Load environment variables from .env file
dotenv.config();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const completion = async () => {
  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo-16k",
      prompt: "Hello world",
    });
    console.log(completion.data.choices[0].text);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

completion();
