export const wikiLink = 'https://nomanssky.fandom.com/wiki/';
export const apiPath = 'https://nomanssky.fandom.com/api.php';

export type BasicQueryData = {
  format: 'json';
  origin: '*';
  [key: string]: string | number;
};

export type BasicQueryApiData = BasicQueryData & {
  action: 'parse';
  prop?: string;
  page?: string;
  section?: number;
};

export interface CensusQueryData {
  Name: string;
  _pageName: string;
  CensusPlayer: string;
  System: string;
  Platform: string;
  Mode: string;
  CensusArrival: string;
  CensusRenewal: string;
  Builderlink?: string;
  CensusReddit?: string;
  CensusDiscord?: string;
  CensusFriend?: string;
  CensusVerified?: string;
}

export interface CargoResponse<T> {
  cargoquery: Array<{
    title: T;
  }>;
}

export type CensusApiResponse = CargoResponse<CensusQueryData>;

export type CargoQueryResponse<T> = {
  cargoquery: Array<{ title: T }>;
};

const buildQueryUrl = (queryObject: Record<string, string | number>): string => {
  const params = new URLSearchParams();

  Object.entries(queryObject).forEach(([key, value]) => {
    params.append(key, value.toString());
  });

  return `${apiPath}?${params.toString()}`;
};

const basicQueryData: BasicQueryData = {
  format: 'json',
  origin: '*',
};

export const getCensusQueryDataUrl = (civilized: string, offset: number, year?: string): string => {
  const queryObject = {
    ...basicQueryData,
    action: 'cargoquery',
    tables: 'Bases',
    fields: [
      'Name',
      'CensusPlayer',
      'CensusReddit',
      'CensusDiscord',
      'CensusFriend',
      'System',
      'Platform',
      'Mode',
      'CensusArrival',
      'CensusRenewal',
      'Builderlink',
    ].join(','),
    where: `CensusShow IS NOT NULL AND Civilized='${civilized}'${
      year ? ` AND CensusRenewal HOLDS ${year}` : ''
    }`,
    order_by: 'CensusRenewal DESC',
    group_by: 'CensusPlayer',
    limit: 500,
    offset
  };

  console.log(queryObject)

  return buildQueryUrl(queryObject);
};

export const getBaseDetailsUrl = (baseName: string): string => {
  const queryObject = {
    ...basicQueryData,
    action: 'cargoquery',
    tables: 'Bases',
    fields: ['Type', 'Farm', 'Geobay', 'Landing_pad', 'Arena', 'Terminal', 'Racetrack'].join(','),
    where: `Name="${baseName}"`,
  };

  return buildQueryUrl(queryObject);
};

export const apiCall = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const textData = await response.text();
    const decodedData = decodeHtmlEntities(textData);

    return JSON.parse(decodedData);
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

const decodeHtmlEntities = (text: string): string => {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
};

export const checkUserExists = async (username: string): Promise<boolean> => {
  const queryObject = {
    ...basicQueryData,
    action: 'query',
    list: 'users',
    ususers: username,
  };

  const url = buildQueryUrl(queryObject);
  const data = await apiCall<any>(url);

  return data?.query?.users?.[0]?.userid !== undefined;
};

export const getWikiSectionContent = async (page: string, section: number): Promise<string> => {
  const queryObject = {
    ...basicQueryData,
    action: 'parse',
    page,
    prop: 'wikitext',
    section,
  };

  const url = buildQueryUrl(queryObject);
  const data = await apiCall<any>(url);

  return data?.parse?.wikitext?.['*'] || '';
};

export const isCargoResponse = <T>(data: any): data is CargoQueryResponse<T> => {
  return data?.cargoquery !== undefined;
};

export const mapCensusData = (data: CensusApiResponse): CensusQueryData[] => {
  return data.cargoquery.map(({ title }) => ({
    Name: title.Name,
    _pageName: title._pageName || title.Name,
    CensusPlayer: title.CensusPlayer || 'Desconocido',
    System: title.System || 'Desconocido',
    Platform: title.Platform || 'Desconocida',
    Mode: title.Mode || 'Desconocido',
    CensusArrival: title.CensusArrival || 'Desconocido',
    CensusRenewal: title.CensusRenewal || 'Desconocido',
    Builderlink: title.Builderlink,
    CensusReddit: title.CensusReddit,
    CensusDiscord: title.CensusDiscord,
    CensusFriend: title.CensusFriend,
    CensusVerified: title.CensusVerified,
  }));
};

export const fetchCensusData = async (
  civilized: string,
  offset: number,
  year?: string
): Promise<CensusQueryData[]> => {
  const url = getCensusQueryDataUrl(civilized, offset, year);
  const data = await apiCall<CensusApiResponse>(url);

  if (!data?.cargoquery) {
    throw new Error('Invalid API response structure');
  }

  return mapCensusData(data);
};
