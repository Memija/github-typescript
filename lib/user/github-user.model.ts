/**
 * GitHub user interface.
 */
export interface IGitHubUser {
  /**
   * Username.
   */
  login: String;

  /**
   * Unique identifier.
   */
  id: Number;

  /**
   * Avatar URL (Uniform Resource Locator).
   */
  avatar_url: String;

  /**
   * Gravatar URL (Uniform Resource Locator).
   */
  gravatar_id: String;

  /**
   * URL (Uniform Resource Locator).
   */
  url: String;

  /**
   * HTML (Hypertext Markup Language) URL (Uniform Resource Locator).
   */
  html_url: String;

  /**
   * Followers URL (Uniform Resource Locator).
   */
  followers_url: String;

  /**
   * Following URL (Uniform Resource Locator).
   */
  following_url: String;

  /**
   * Gists URL (Uniform Resource Locator).
   */
  gists_url: String;

  /**
   * Starred URL (Uniform Resource Locator).
   */
  starred_url: String;

  /**
   * Subscriptions URL (Uniform Resource Locator).
   */
  subscriptions_url: String;

  /**
   * Organizations URL (Uniform Resource Locator).
   */
  organizations_url: String;

  /**
   * Repository URL (Uniform Resource Locator).
   */
  repos_url: String;

  /**
   * Events URL (Uniform Resource Locator).
   */
  events_url: String;

  /**
   * Received events URL (Uniform Resource Locator).
   */
  received_events_url: String;

  /**
   * Type.
   */
  type: String;

  /**
   * Site admin.
   */
  site_admin: Boolean;
}
