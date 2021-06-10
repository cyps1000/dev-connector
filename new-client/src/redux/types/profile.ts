/**
 * Defines the actions types for the Profile
 */
export enum ProfileActionTypes {
  GET_PROFILE = "get_profile",
  PROFILE_ERROR = "profile_error",
  DELETE_PROFILE = "delete_profile",
  CLEAR_PROFILE = "clear_profile",
  UPDATE_PROFILE = "update_profile",
  GET_PROFILES = "get_profiles",
  GET_REPOS = "get_repos",
  RESET_PROFILE_LOADING = "reset_profile_loading"
}

/**
 * Defines the interface for the Social links
 */
interface SocialObject {
  youtube: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}

/**
 * Defines the interface for the user attached
 * to the Profile
 */
interface User {
  id: string;
  name: string;
  avatar: string;
}

/**
 * Defines the interface for Experience
 */
export interface Experience {
  _id: string;
  current: boolean;
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  description: string;
}

/**
 * Defines the interface for Education
 */
export interface Education {
  _id: string;
  current: boolean;
  school: string;
  degree: string;
  fieldofstudy: string;
  from: string;
  to: string;
  description: string;
}

/**
 * Defines the GitHubRepoPayload interface
 */
export interface GitHubRepoPayload {
  html_url: string;
  name: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
}

/**
 * Defines the ProfilePayload interface
 */
export interface ProfilePayload {
  id: string;
  social?: SocialObject;
  skills: string[];
  user: User;
  company: string;
  website: string;
  location: string;
  bio: string;
  status: string;
  experience: Experience[];
  education: Education[];
  date: string;
  githubusername: string;
}
