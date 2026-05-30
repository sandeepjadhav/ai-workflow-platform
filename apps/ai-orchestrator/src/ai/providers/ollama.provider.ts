import ollama from "ollama";
import { AIProvider } from "./base.provider";
import { env } from "../../config/env";

export class OllamaProvider implements AIProvider {

  async generateResponse(
    prompt: string
  ): Promise<string> {

    const response =
      await ollama.chat({
        model: env.ollamaModel,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      });

    return response.message.content;
  }

  async *streamResponse(
    prompt: string
  ): AsyncGenerator<string> {

    const stream =
      await ollama.chat({
        model: env.ollamaModel,
        stream: true,

        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      });

    for await (const chunk of stream) {

      if (chunk.message?.content) {
        yield chunk.message.content;
      }
    }
  }
}