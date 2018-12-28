import { IGitHubUser } from '../user/github-user.model';

/**
 * GitHub repository interface.
 */
export interface IGitHubRepository {
  /**
   * Unique identifier.
   */
  id: Number;

  /**
   * Name.
   */
  name: String;

  /**
   * Full name.
   */
  full_name: String;

  /**
   * Owner.
   */
  owner: IGitHubUser;

  /**
   * Private.
   */
  private: Boolean;

  /**
   * HTML (Hypertext Markup Language) URL (Uniform Resource Locator).
   */
  html_url: String;

  /**
   * Description.
   */
  description: String;

  /**
   * Fork.
   */
  fork: Boolean;

  /**
   * URL (Uniform Resource Locator).
   */
  url: String;

  /**
   * Forks URL (Uniform Resource Locator).
   */
  forks_url: String;

  /**
   * Keys URL (Uniform Resource Locator).
   */
  keys_url: String;

  /**
   * Collaborators URL (Uniform Resource Locator).
   */
  collaborators_url: String;

  /**
   * Teams URL (Uniform Resource Locator).
   */
  teams_url: String;

  /**
   * Hooks URL (Uniform Resource Locator).
   */
  hooks_url: String;

  /**
   * Issue events URL (Uniform Resource Locator).
   */
  issue_events_url: String;

  /**
   * Events URL (Uniform Resource Locator).
   */
  events_url: String;

  /**
   * Assignees URL (Uniform Resource Locator).
   */
  assignees_url: String;

  /**
   * Branches URL (Uniform Resource Locator).
   */
  branches_url: String;

  /**
   * Tags URL (Uniform Resource Locator).
   */
  tags_url: String;

  /**
   * Blobs URL (Uniform Resource Locator).
   */
  blobs_url: String;

  /**
   * Git tags URL (Uniform Resource Locator).
   */
  git_tags_url: String;

  /**
   * Git refs URL (Uniform Resource Locator).
   */
  git_refs_url: String;

  /**
   * Trees URL (Uniform Resource Locator).
   */
  trees_url: String;

  /**
   * Statuses URL (Uniform Resource Locator).
   */
  statuses_url: String;

  /**
   * Languages URL (Uniform Resource Locator).
   */
  languages_url: String;

  /**
   * Stargazers URL (Uniform Resource Locator).
   */
  stargazers_url: String;

  /**
   * Contributors URL (Uniform Resource Locator).
   */
  contributors_url: String;

  /**
   * Subscribers URL (Uniform Resource Locator).
   */
  subscribers_url: String;

  /**
   * Subscription URL (Uniform Resource Locator).
   */
  subscription_url: String;

  /**
   * Commits URL (Uniform Resource Locator).
   */
  commits_url: String;

  /**
   * Git commits URL (Uniform Resource Locator).
   */
  git_commits_url: String;

  /**
   * Comments URL (Uniform Resource Locator).
   */
  comments_url: String;

  /**
   * Comments URL (Uniform Resource Locator).
   */
  issue_comment_url: String;

  /**
   * Contents URL (Uniform Resource Locator).
   */
  contents_url: String;

  /**
   * Compare URL (Uniform Resource Locator).
   */
  compare_url: String;

  /**
   * Merges URL (Uniform Resource Locator).
   */
  merges_url: String;

  /**
   * Archive URL (Uniform Resource Locator).
   */
  archive_url: String;

  /**
   * Downloads URL (Uniform Resource Locator).
   */
  downloads_url: String;

  /**
   * Issues URL (Uniform Resource Locator).
   */
  issues_url: String;

  /**
   * Pulls URL (Uniform Resource Locator).
   */
  pulls_url: String;

  /**
   * Milestones URL (Uniform Resource Locator).
   */
  milestones_url: String;

  /**
   * Notifications URL (Uniform Resource Locator).
   */
  notifications_url: String;

  /**
   * Labels URL (Uniform Resource Locator).
   */
  labels_url: String;

  /**
   * Releases URL (Uniform Resource Locator).
   */
  releases_url: String;

  /**
   * Deployments URL (Uniform Resource Locator).
   */
  deployments_url: String;

  /**
   * Created at.
   */
  created_at: String;

  /**
   * Updated at.
   */
  updated_at: String;

  /**
   * Pushed at.
   */
  pushed_at: String;

  /**
   * Git URL (Uniform Resource Locator).
   */
  git_url: String;

  /**
   * SSH (Secure Shell) URL (Uniform Resource Locator).
   */
  ssh_url: String;

  /**
   * Clone URL (Uniform Resource Locator).
   */
  clone_url: String;

  /**
   * SVN (Apache Subversion) URL (Uniform Resource Locator).
   */
  svn_url: String;

  /**
   * Homepage.
   */
  homepage?: String;

  /**
   * Size.
   */
  size: Number;

  /**
   * Stargazers count.
   */
  stargazers_count: Number;

  /**
   * Watchers count.
   */
  watchers_count: Number;

  /**
   * Language.
   */
  language: String;

  /**
   * Has issues.
   */
  has_issues: Boolean;

  /**
   * Has projects.
   */
  has_projects: Boolean;

  /**
   * Has downloads.
   */
  has_downloads: Boolean;

  /**
   * Has Wiki.
   */
  has_wiki: Boolean;

  /**
   * Has pages.
   */
  has_pages: Boolean;

  /**
   * Forks count.
   */
  forks_count: Number;

  /**
   * Mirror URL (Uniform Resource Locator).
   */
  mirror_url?: String;

  /**
   * Open issues count.
   */
  open_issues_count: Number;

  /**
   * Forks.
   */
  forks: Number;

  /**
   * Open issues.
   */
  open_issues: Number;

  /**
   * Watchers.
   */
  watchers: Number;

  /**
   * Default branch.
   */
  default_branch: String;
}
