import { IGitHubGistFile } from '../gist/file/github-gist-file.interface';
import { IGitHubUser } from '../user/github-user.model';

/**
 * GitHub Gist interface.
 */
export interface IGitHubGist {
  /**
   * URL (Uniform Resource Locator).
   */
  url: String;

  /**
   * Forks URL (Uniform Resource Locator).
   */
  forks_url: String;

  /**
   * Commits URL (Uniform Resource Locator).
   */
  commits_url: String;

  /**
   * Unique identifier.
   */
  id: String;

  /**
   * Git pull URL (Uniform Resource Locator).
   */
  git_pull_url: String;

  /**
   * Git push URL (Uniform Resource Locator).
   */
  git_push_url: String;

  /**
   * HTML (Hypertext Markup Language) URL (Uniform Resource Locator).
   */
  html_url: String;

  /**
   * Files.
   */
  files: IGitHubGistFile;

  /**
   * Public.
   */
  public: Boolean;

  /**
   * Created at.
   */
  created_at: String;

  /**
   * Updated at.
   */
  updated_at: String;

  /**
   * Description.
   */
  description: String;

  /**
   * Comments.
   */
  comments: Number;

  /**
   * User.
   */
  user?: String;

  /**
   * Comments URL (Uniform Resource Locator).
   */
  comments_url: String;

  /**
   * Owner.
   */
  owner: IGitHubUser;

  /**
   * Truncated.
   */
  truncated: Boolean;
}
