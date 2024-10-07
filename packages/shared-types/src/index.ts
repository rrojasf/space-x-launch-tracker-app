export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean | null;
  details: string | null;
  links: {
    patch: {
      small: string | null;
      large: string | null;
    };
    webcast: string | null;
  };
  launchpad: string;
  upcoming: boolean | null;
}

export type LaunchType = 'upcoming' | 'past' | 'all';

export interface Tweet {
  id: string;
  content: string;
  created_at: string;
  author: string;
}