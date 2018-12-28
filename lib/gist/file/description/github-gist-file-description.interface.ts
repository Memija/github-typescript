/**
 * GitHub Gist file description interface.
 */
export interface IGitHubGistFileDescription {
  /**
   * Filename.
   */
  filename: String;

  /**
   * Type.
   */
  type: String;

  /**
   * Language.
   */
  language: String;

  /**
   * Raw URL (Uniform Resource Locator).
   */
  raw_url: String;

  /**
   * Size.
   */
  size: Number;
}
