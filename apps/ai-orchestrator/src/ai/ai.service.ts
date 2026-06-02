import {
  getProvider,
} from "./providers/provider.factory";


export class AIService {


  async generateResponse(question: string,) {
    const provider =
      getProvider();
    console.log(
      "Selected AI Provider:",
      provider.constructor.name,
    );
    console.log(
      "Generating response for question:",
      question,
    );

    const context =
      await this.getContext(
        question,
      );

    const prompt = `
      You are an AI assistant.
      Answer ONLY using the provided context.
      If the answer is not present in the context,
      say:
      "I could not find that information in the uploaded documents."
      Context:
      ${context}
      Question:
      ${question}
      `;
    console.log(
      "Constructed prompt:",
      prompt,
    );
    return provider
      .generateResponse(
        prompt,
      );
  }

  async streamResponse(content: string,) {
    const provider =
      getProvider();
    console.log(
      "Selected AI Provider for streaming:",
      provider.constructor.name,
    );
    console.log(
      "Streaming response for content:",
      content,
    );
    return provider
      .streamResponse(
        content,
      );
  }

  async getContext(
    question: string,
  ): Promise<string> {

    const response =
      await fetch(

        "http://localhost:3003/retrieve",

        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            question,
          }),
        },
      );

    const data =
      await response.json();

    return data.context || "";
  }
}