import { readGithubCodeChangeOpenAiFactory } from '../read-github-code-change.open-ai'
import { createMock } from 'ts-auto-mock'
import { OpenAiClient } from '../open-ai-client'

const mockOfOpenAiClient = createMock<OpenAiClient>()
const readGithubCodeChangeOpenAi = readGithubCodeChangeOpenAiFactory(mockOfOpenAiClient)

describe('readGithubCodeChangeOpenAi()', () => {
  test('read a github code change and understand its meaning', async () => {
    // Given
    const githubCodeChange = {
      oldCode: 'const issou',
      newCode: 'const issou2',
    }

    // When
    const readerAssistant = await readGithubCodeChangeOpenAi(githubCodeChange)

    // Then
    expect(readerAssistant).toEqual({
      title: '',
      description: '',
      confidence: 1,
    })
  })
})
