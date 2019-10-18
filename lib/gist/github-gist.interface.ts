import { IGitHubGistFile } from '../gist/file/github-gist-file.interface';
import { IGitHubUser } from '../user/github-user.model';

/**
 * GitHub Gist interface.
 */
export interface IGitHubGist {
  /**
   * URL (Uniform Resource Locator).
   */
  url: string;

  /**
   * Forks URL (Uniform Resource Locator).
   */
  forks_url: string;

  /**
   * Commits URL (Uniform Resource Locator).
   */
  commits_url: string;

  /**
   * Unique identifier.
   */
  id: string;

  /**
   * Git pull URL (Uniform Resource Locator).
   */
  git_pull_url: string;

  /**
   * Git push URL (Uniform Resource Locator).
   */
  git_push_url: string;

  /**
   * HTML (Hypertext Markup Language) URL (Uniform Resource Locator).
   */
  html_url: string;

  /**
   * Files.
   */
  files: IGitHubGistFile;

  /**
   * Public.
   */
  public: boolean;

  /**
   * Created at.
   */
  created_at: string;

  /**
   * Updated at.
   */
  updated_at: string;

  /**
   * Description.
   */
  description: string;

  /**
   * Comments.
   */
  comments: number;

  /**
   * User.
   */
  user?: string;

  /**
   * Comments URL (Uniform Resource Locator).
   */
  comments_url: string;

  /**
   * Owner.
   */
  owner: IGitHubUser;

  /**
   * Truncated.
   */
  truncated: boolean;
}
