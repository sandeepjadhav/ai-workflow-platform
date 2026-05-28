import {
  getProvider,
} from "./providers/provider.factory";

export class AIService {

  async generateResponse(
    content: string,
  ) {

    const provider =
      getProvider();

    return provider
      .generateResponse(
        content,
      );
  }
}