import {
  getProvider,
} from "./providers/provider.factory";

export class AIService {

  async generateResponse(content: string,) {
    const provider =
      getProvider();
    console.log(
      "Selected AI Provider:",
      provider.constructor.name,
    );
    console.log(
      "Generating response for content:",
      content,
    );
    return provider
      .generateResponse(
        content,
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

}