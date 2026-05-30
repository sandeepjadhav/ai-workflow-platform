export interface AIProvider {

  generateResponse(
    prompt: string,
  ): Promise<string>;

  streamResponse(
    prompt: string,
  ): AsyncGenerator<string>;
  
}