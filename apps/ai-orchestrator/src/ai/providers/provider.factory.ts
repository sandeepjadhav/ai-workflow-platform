import { env }
  from "../../config/env";

import {
  AIProvider,
} from "./base.provider";

import {
  GeminiProvider,
} from "./gemini.provider";

import {
  DeepSeekProvider,
} from "./deepseek.provider";

export function getProvider():
  AIProvider {

  switch (
    env.aiProvider
  ) {

    case "deepseek":

      return new DeepSeekProvider();

    case "gemini":

    default:

      return new GeminiProvider();
  }
}