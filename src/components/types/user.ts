export type LocalGithubUser = Omit<
  GithubUser,
  "twitter_username" | "created_at" | "avatar_url" | "public_repos"
> & {
  twitter: string | null;
  created: string;
  avatar: string;
  repos: number;
};

export type GithubUser = {
  login: string;
  avatar_url: string;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GithubError = {
  message: string;
  documentation_url: string;
};
