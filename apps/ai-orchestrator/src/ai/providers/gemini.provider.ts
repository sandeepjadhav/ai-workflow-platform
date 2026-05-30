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

  async *streamResponse(
    prompt: string,
  ): AsyncGenerator<string> {

    const stream =
      await ai.models.generateContentStream({

        model:
          "gemini-2.0-flash",

        contents:
          prompt,
      });

    for await (
      const chunk
      of stream
    ) {

      const text =
        chunk.text;

      if (text) {

        yield text;
      }
    }
  }
}