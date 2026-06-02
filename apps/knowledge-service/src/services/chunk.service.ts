// export class ChunkService {

//   chunkText(
//     text: string,
//     chunkSize = 200,
//     overlap = 20,
//   ): string[] {

//     const chunks: string[] = [];

//     let start = 0;

//     while (start < text.length) {

//       const end = Math.min(
//         start + chunkSize,
//         text.length,
//       );

//       chunks.push(
//         text.slice(start, end),
//       );

//       if (end === text.length) {
//         break;
//       }

//       start = end - overlap;

//       if (start < 0) {
//         start = 0;
//       }
//     }

//     return chunks;
//   }
// }

export class ChunkService {

  chunkText(
    text: string,
  ): string[] {

    return text
      .split(/^#/gm)
      .map(
        chunk => chunk.trim(),
      )
      .filter(Boolean);
  }
}