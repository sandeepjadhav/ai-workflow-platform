// import OpenAI from "openai";


// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export class OpenAIProvider {

//   async generateResponse(
//     prompt: string,
//   ): Promise<string> {

//     const completion =
//       await openai.chat.completions
//         .create({

//           model:
//             'gpt-4o',

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