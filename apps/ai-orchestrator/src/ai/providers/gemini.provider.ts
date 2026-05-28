import {
  GoogleGenAI,
} from "@google/genai";

import { env }
  from "../../config/env";

import {
  AIProvider,
} from "./base.provider";

const ai =
  new GoogleGenAI({

    apiKey:
      env.geminiApiKey,
  });

export class GeminiProvider
  implements AIProvider {

  async generateResponse(
    prompt: string,
  ): Promise<string> {

    const response =
      await ai.models.generateContent({

        model:
          "gemini-2.0-flash",

        contents:
          prompt,
      });

    return (
      response.text || ""
    );
  }
}