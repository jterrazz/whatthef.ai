import { ReaderAssistant } from '../../domain/assistants/reader-assistant'
import { GithubPRCodeChange } from '../../domain/pages/github'
import { OpenAiClient } from './open-ai-client'

export const readGithubCodeChangeOpenAiFactory = (openAiClient: OpenAiClient) => {
  return async (githubCodeChange: GithubPRCodeChange): Promise<ReaderAssistant> => {
    const response = await openAiClient.query(
      `Ici on pose la question à OpenAI avec une demande de format de réponse bien précis,
      ce qui permettra de le parser
      ${githubCodeChange.newCode}
      ${githubCodeChange.oldCode}`,
    )

    return {
      title: response,
      description: response,
      confidence: 1,
    }
  }
}
