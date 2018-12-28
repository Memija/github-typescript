import { IGitHubGistFileDescription } from './description/github-gist-file-description.interface';

/**
 * GitHub Gist file interface.
 */
export interface IGitHubGistFile {
  /**
   * File.
   */
  file: IGitHubGistFileDescription;
}
