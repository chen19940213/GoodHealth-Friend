export interface IGetLocationOptions {
  type?: string;
}

export interface IGetLocationResult {
  latitude: string;
  longitude: string;
}

export interface INavigateToOptions {
  url?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
  recycle?: boolean;
}



