import { GithubPRCodeChange } from '../../domain/pages/github'

// Implem avec ce qui read la page HTML
export const parseGithubCodeChange = async (): Promise<GithubPRCodeChange> => {
  return {
    oldCode: 'oldCode',
    newCode: 'newCode',
  }
}
