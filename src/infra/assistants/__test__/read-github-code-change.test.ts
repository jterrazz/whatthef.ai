import { readGithubCodeChangeOpenAiFactory } from '../read-github-code-change.open-ai'

const mockOfOpenAiClient = createMock()
const readGithubCodeChangeOpenAi = readGithubCodeChangeOpenAiFactory(mockOfOpenAiClient)

describe('readGithubCodeChangeOpenAi()', () => {
  test('read a github code change and understand its meaning', async () => {
    // Given
    const githubCodeChange = {
      oldCode: 'const issou',
      newCode: 'const issou2',
    }

    // When
    const readerAssistant = readGithubCodeChangeOpenAi(githubCodeChange)

    // Then
    expect(readerAssistant).toEqual({
      title: 'string',
      description: 'string',
      confidence: 1,
    })
  })
})
