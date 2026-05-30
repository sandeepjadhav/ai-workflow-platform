import { env }
  from "../../config/env";

import {
  AIProvider,
} from "./base.provider";

import {
  GeminiProvider,
} from "./gemini.provider";

// import {
//   DeepSeekProvider,
// } from "./deepseek.provider";
import { OllamaProvider } from "./ollama.provider";

export function getProvider():
  AIProvider {

  switch (
    env.aiProvider
  ) {

    case "ollama":
      return new OllamaProvider();
  
    // case "deepseek":
    //   return new DeepSeekProvider();

    case "gemini":
      return new GeminiProvider();
    
    default:

      return new GeminiProvider();
  }
}