export interface OpenAiClient {
  query(question: string): Promise<string>
}

// export class OpenAiClient {
//   query = async (question: string): Promise<string> => {
//     return 'response'
//   }
// }
