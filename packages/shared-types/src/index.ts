export interface Launch {
  fairings: Fairings;
  links: Links;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  net: boolean;
  window: number | null;
  rocket: string;
  success: boolean | null;
  failures: Failure[];
  details: string | null;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string;
  id: string;
}

interface Fairings {
  reused: boolean | null;
  recovery_attempt: boolean | null;
  recovered: boolean | null;
  ships: string[];
}

interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: string | null;
  webcast: string | null;
  youtube_id: string | null;
  article: string | null;
  wikipedia: string | null;
}

interface Patch {
  small: string | null;
  large: string | null;
}

interface Reddit {
  campaign: string | null;
  launch: string | null;
  media: string | null;
  recovery: string | null;
}

interface Flickr {
  small: string[];
  original: string[];
}

interface Failure {
  time?: number;
  altitude?: number;
  reason?: string;
}

interface Core {
  core: string | null;
  flight: number | null;
  gridfins: boolean | null;
  legs: boolean | null;
  reused: boolean | null;
  landing_attempt: boolean | null;
  landing_success: boolean | null;
  landing_type: string | null;
  landpad: string | null;
}

export type LaunchType = "upcoming" | "past" | "all" | "favorites";

export interface Tweet {
  id: string;
  content: string;
  created_at: string;
  author: string;
}
