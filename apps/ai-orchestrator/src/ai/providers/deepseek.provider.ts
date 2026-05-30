// import OpenAI from "openai";

// import { env }
//   from "../../config/env";

// import {
//   AIProvider,
// } from "./base.provider";

// const client =
//   new OpenAI({

//     apiKey:
//       env.deepseekApiKey,

//     baseURL:
//       "https://api.deepseek.com",
//   });

// export class DeepSeekProvider
//   implements AIProvider {

//   async generateResponse(
//     prompt: string,
//   ): Promise<string> {

//     const completion =
//       await client.chat.completions
//         .create({

//           model:
//             "deepseek-chat",

//           messages: [

//             {
//               role: "user",

//               content: prompt,
//             },
//           ],
//         });

//     return (

//       completion
//         .choices[0]
//         ?.message
//         ?.content || ""
//     );
//   }
// }
