// F1 2026 Race Calendar (Unofficial)
// Data source: https://www.formula1.com/en/racing/2026.html
// Last updated: 2026-01-30

export interface RaceSession {
  name: string;
  coverImage?: string;
  date: string; // ISO 8601 format
  time: string; // Local circuit time in 24h format
  status?: 'completed' | 'live' | 'upcoming';
}

export interface GrandPrix {
  round: number;
  coverImage?: string;
  gpImage?: string;
  trackImage?: string;
  country: string;
  location: string;
  officialName: string;
  circuit: string;
  dateRange: string; // e.g., "06 - 08 MAR"
  weekendStart: string; // ISO 8601
  weekendEnd: string; // ISO 8601
  sessions: {
    fp1?: RaceSession;
    fp2?: RaceSession;
    fp3?: RaceSession;
    sprintQualifying?: RaceSession;
    sprint?: RaceSession;
    qualifying: RaceSession;
    race: RaceSession;
  };
  facts: {
    circuitLength?: string; // in km
    laps?: number;
    raceDistance?: string; // in km
    firstGrandPrix?: number;
    lapRecord?: {
      time: string;
      driver: string;
      year: number;
    };
  };
  trackImageUrl?: string;
  countryCode: string; // ISO 3166-1 alpha-2
  timezone: string; // IANA timezone
  status: 'completed' | 'live' | 'upcoming';
}

export const f1Calendar2026: GrandPrix[] = [
  {
    round: 1,
    coverImage: 'https://i.pinimg.com/1200x/ec/c2/f5/ecc2f523c4bde102f8048939e0bb7813.jpg',
    gpImage: 'https://i.pinimg.com/736x/83/b5/c2/83b5c21518d163f4b0af55da208a07e9.jpg',
    trackImage: 'https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000000/common/f1/2026/track/2026trackmelbournedetailed.webp',

    country: 'Australia',
    location: 'Melbourne',
    officialName: 'AUSTRALIAN GRAND PRIX',
    circuit: 'Albert Park Circuit',
    dateRange: '06 - 08 MAR',
    weekendStart: '2026-03-06T00:00:00+11:00',
    weekendEnd: '2026-03-08T23:59:59+11:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-03-06', time: '14:30' },
      fp2: { name: 'Practice 2', date: '2026-03-06', time: '18:00' },
      fp3: { name: 'Practice 3', date: '2026-03-07', time: '14:30' },
      qualifying: { name: 'Qualifying', date: '2026-03-07', time: '18:00' },
      race: { name: 'Race', date: '2026-03-08', time: '15:00' },
    },
    facts: {
      circuitLength: '5.278',
      laps: 58,
      raceDistance: '306.124',
      firstGrandPrix: 1996,
      lapRecord: { time: '1:20.260', driver: 'Charles Leclerc', year: 2024 },
    },
    countryCode: 'AU',
    timezone: 'Australia/Melbourne',
    status: 'upcoming',
  },
  {
    round: 2,
    country: 'China',
    coverImage: 'https://i.pinimg.com/736x/a7/cf/79/a7cf79ed6c2537efc81a169a015de216.jpg',
    gpImage: 'https://i.pinimg.com/1200x/61/c6/86/61c6865d2a0af6c10f9002c965dce81c.jpg',
    trackImage: 'https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000000/common/f1/2026/track/2026trackshanghaidetailed.webp',
    location: 'Shanghai',
    officialName: 'CHINESE GRAND PRIX',
    circuit: 'Shanghai International Circuit',
    dateRange: '13 - 15 MAR',
    weekendStart: '2026-03-13T00:00:00+08:00',
    weekendEnd: '2026-03-15T23:59:59+08:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-03-13', time: '11:30' },
      sprintQualifying: { name: 'Sprint Qualifying', date: '2026-03-13', time: '15:30' },
      sprint: { name: 'Sprint Race', date: '2026-03-14', time: '11:00' },
      qualifying: { name: 'Qualifying', date: '2026-03-14', time: '15:00' },
      race: { name: 'Race', date: '2026-03-15', time: '15:00' },
    },
    facts: {
      circuitLength: '5.451',
      laps: 56,
      raceDistance: '305.066',
      firstGrandPrix: 2004,
      lapRecord: { time: '1:32.238', driver: 'Michael Schumacher', year: 2004 },
    },
    countryCode: 'CN',
    timezone: 'Asia/Shanghai',
    status: 'upcoming',
  },
  {
    round: 3,
    country: 'Japan',
    coverImage: 'https://i.pinimg.com/736x/a7/cf/79/a7cf79ed6c2537efc81a169a015de216.jpg',
    gpImage: 'https://i.pinimg.com/1200x/be/9f/c7/be9fc7e674d00eb4a12ab1dd4aa4fd33.jpg',
    trackImage: 'https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000000/common/f1/2026/track/2026tracksuzukadetailed.webp',
    location: 'Suzuka',
    officialName: 'JAPANESE GRAND PRIX',
    circuit: 'Suzuka International Circuit',
    dateRange: '27 - 29 MAR',
    weekendStart: '2026-03-27T00:00:00+09:00',
    weekendEnd: '2026-03-29T23:59:59+09:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-03-27', time: '11:30' },
      fp2: { name: 'Practice 2', date: '2026-03-27', time: '15:00' },
      fp3: { name: 'Practice 3', date: '2026-03-28', time: '11:30' },
      qualifying: { name: 'Qualifying', date: '2026-03-28', time: '15:00' },
      race: { name: 'Race', date: '2026-03-29', time: '14:00' },
    },
    facts: {
      circuitLength: '5.807',
      laps: 53,
      raceDistance: '307.471',
      firstGrandPrix: 1987,
      lapRecord: { time: '1:30.983', driver: 'Lewis Hamilton', year: 2019 },
    },
    countryCode: 'JP',
    timezone: 'Asia/Tokyo',
    status: 'upcoming',
  },
  {
    round: 4,
    country: 'Bahrain',
    location: 'Sakhir',
    officialName: 'BAHRAIN GRAND PRIX',
    circuit: 'Bahrain International Circuit',
    dateRange: '10 - 12 APR',
    weekendStart: '2026-04-10T00:00:00+03:00',
    weekendEnd: '2026-04-12T23:59:59+03:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-04-10', time: '15:30' },
      fp2: { name: 'Practice 2', date: '2026-04-10', time: '19:00' },
      fp3: { name: 'Practice 3', date: '2026-04-11', time: '16:30' },
      qualifying: { name: 'Qualifying', date: '2026-04-11', time: '20:00' },
      race: { name: 'Race', date: '2026-04-12', time: '18:00' },
    },
    facts: {
      circuitLength: '5.412',
      laps: 57,
      raceDistance: '308.238',
      firstGrandPrix: 2004,
      lapRecord: { time: '1:31.447', driver: 'Pedro de la Rosa', year: 2005 },
    },
    countryCode: 'BH',
    timezone: 'Asia/Bahrain',
    status: 'upcoming',
  },
  {
    round: 5,
    country: 'Saudi Arabia',
    location: 'Jeddah',
    officialName: 'SAUDI ARABIAN GRAND PRIX',
    circuit: 'Jeddah Corniche Circuit',
    dateRange: '17 - 19 APR',
    weekendStart: '2026-04-17T00:00:00+03:00',
    weekendEnd: '2026-04-19T23:59:59+03:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-04-17', time: '17:30' },
      fp2: { name: 'Practice 2', date: '2026-04-17', time: '21:00' },
      fp3: { name: 'Practice 3', date: '2026-04-18', time: '17:30' },
      qualifying: { name: 'Qualifying', date: '2026-04-18', time: '21:00' },
      race: { name: 'Race', date: '2026-04-19', time: '20:00' },
    },
    facts: {
      circuitLength: '6.174',
      laps: 50,
      raceDistance: '308.450',
      firstGrandPrix: 2021,
      lapRecord: { time: '1:30.734', driver: 'Lewis Hamilton', year: 2021 },
    },
    countryCode: 'SA',
    timezone: 'Asia/Riyadh',
    status: 'upcoming',
  },
  {
    round: 6,
    country: 'United States',
    location: 'Miami',
    officialName: 'MIAMI GRAND PRIX',
    circuit: 'Miami International Autodrome',
    dateRange: '01 - 03 MAY',
    weekendStart: '2026-05-01T00:00:00-04:00',
    weekendEnd: '2026-05-03T23:59:59-04:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-05-01', time: '12:30' },
      sprintQualifying: { name: 'Sprint Qualifying', date: '2026-05-01', time: '16:30' },
      sprint: { name: 'Sprint Race', date: '2026-05-02', time: '12:00' },
      qualifying: { name: 'Qualifying', date: '2026-05-02', time: '16:00' },
      race: { name: 'Race', date: '2026-05-03', time: '16:00' },
    },
    facts: {
      circuitLength: '5.412',
      laps: 57,
      raceDistance: '308.326',
      firstGrandPrix: 2022,
    },
    countryCode: 'US',
    timezone: 'America/New_York',
    status: 'upcoming',
  },
  {
    round: 7,
    country: 'Canada',
    location: 'Montreal',
    officialName: 'CANADIAN GRAND PRIX',
    circuit: 'Circuit Gilles Villeneuve',
    dateRange: '22 - 24 MAY',
    weekendStart: '2026-05-22T00:00:00-04:00',
    weekendEnd: '2026-05-24T23:59:59-04:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-05-22', time: '12:30' },
      sprintQualifying: { name: 'Sprint Qualifying', date: '2026-05-22', time: '16:30' },
      sprint: { name: 'Sprint Race', date: '2026-05-23', time: '12:00' },
      qualifying: { name: 'Qualifying', date: '2026-05-23', time: '16:00' },
      race: { name: 'Race', date: '2026-05-24', time: '16:00' },
    },
    facts: {
      circuitLength: '4.361',
      laps: 70,
      raceDistance: '305.270',
      firstGrandPrix: 1978,
      lapRecord: { time: '1:13.078', driver: 'Valtteri Bottas', year: 2019 },
    },
    countryCode: 'CA',
    timezone: 'America/Toronto',
    status: 'upcoming',
  },
  {
    round: 8,
    country: 'Monaco',
    location: 'Monte Carlo',
    officialName: 'MONACO GRAND PRIX',
    circuit: 'Circuit de Monaco',
    dateRange: '05 - 07 JUN',
    weekendStart: '2026-06-05T00:00:00+02:00',
    weekendEnd: '2026-06-07T23:59:59+02:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-06-05', time: '13:30' },
      fp2: { name: 'Practice 2', date: '2026-06-05', time: '17:00' },
      fp3: { name: 'Practice 3', date: '2026-06-06', time: '12:30' },
      qualifying: { name: 'Qualifying', date: '2026-06-06', time: '16:00' },
      race: { name: 'Race', date: '2026-06-07', time: '15:00' },
    },
    facts: {
      circuitLength: '3.337',
      laps: 78,
      raceDistance: '260.286',
      firstGrandPrix: 1950,
      lapRecord: { time: '1:12.909', driver: 'Lewis Hamilton', year: 2021 },
    },
    countryCode: 'MC',
    timezone: 'Europe/Monaco',
    status: 'upcoming',
  },
  {
    round: 9,
    country: 'Spain',
    location: 'Barcelona',
    officialName: 'BARCELONA-CATALUNYA GRAND PRIX',
    circuit: 'Circuit de Barcelona-Catalunya',
    dateRange: '12 - 14 JUN',
    weekendStart: '2026-06-12T00:00:00+02:00',
    weekendEnd: '2026-06-14T23:59:59+02:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-06-12', time: '13:30' },
      fp2: { name: 'Practice 2', date: '2026-06-12', time: '17:00' },
      fp3: { name: 'Practice 3', date: '2026-06-13', time: '12:30' },
      qualifying: { name: 'Qualifying', date: '2026-06-13', time: '16:00' },
      race: { name: 'Race', date: '2026-06-14', time: '15:00' },
    },
    facts: {
      circuitLength: '4.675',
      laps: 66,
      raceDistance: '308.424',
      firstGrandPrix: 1991,
      lapRecord: { time: '1:18.149', driver: 'Max Verstappen', year: 2021 },
    },
    countryCode: 'ES',
    timezone: 'Europe/Madrid',
    status: 'upcoming',
  },
  {
    round: 10,
    country: 'Austria',
    location: 'Spielberg',
    officialName: 'AUSTRIAN GRAND PRIX',
    circuit: 'Red Bull Ring',
    dateRange: '26 - 28 JUN',
    weekendStart: '2026-06-26T00:00:00+02:00',
    weekendEnd: '2026-06-28T23:59:59+02:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-06-26', time: '13:30' },
      fp2: { name: 'Practice 2', date: '2026-06-26', time: '17:00' },
      fp3: { name: 'Practice 3', date: '2026-06-27', time: '12:30' },
      qualifying: { name: 'Qualifying', date: '2026-06-27', time: '16:00' },
      race: { name: 'Race', date: '2026-06-28', time: '15:00' },
    },
    facts: {
      circuitLength: '4.318',
      laps: 71,
      raceDistance: '306.452',
      firstGrandPrix: 1970,
      lapRecord: { time: '1:05.619', driver: 'Carlos Sainz', year: 2020 },
    },
    countryCode: 'AT',
    timezone: 'Europe/Vienna',
    status: 'upcoming',
  },
  {
    round: 11,
    country: 'Great Britain',
    location: 'Silverstone',
    officialName: 'BRITISH GRAND PRIX',
    circuit: 'Silverstone Circuit',
    dateRange: '03 - 05 JUL',
    weekendStart: '2026-07-03T00:00:00+01:00',
    weekendEnd: '2026-07-05T23:59:59+01:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-07-03', time: '12:30' },
      sprintQualifying: { name: 'Sprint Qualifying', date: '2026-07-03', time: '16:30' },
      sprint: { name: 'Sprint Race', date: '2026-07-04', time: '12:00' },
      qualifying: { name: 'Qualifying', date: '2026-07-04', time: '16:00' },
      race: { name: 'Race', date: '2026-07-05', time: '15:00' },
    },
    facts: {
      circuitLength: '5.891',
      laps: 52,
      raceDistance: '306.198',
      firstGrandPrix: 1950,
      lapRecord: { time: '1:27.097', driver: 'Max Verstappen', year: 2020 },
    },
    countryCode: 'GB',
    timezone: 'Europe/London',
    status: 'upcoming',
  },
  {
    round: 12,
    country: 'Belgium',
    location: 'Spa-Francorchamps',
    officialName: 'BELGIAN GRAND PRIX',
    circuit: 'Circuit de Spa-Francorchamps',
    dateRange: '17 - 19 JUL',
    weekendStart: '2026-07-17T00:00:00+02:00',
    weekendEnd: '2026-07-19T23:59:59+02:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-07-17', time: '13:30' },
      fp2: { name: 'Practice 2', date: '2026-07-17', time: '17:00' },
      fp3: { name: 'Practice 3', date: '2026-07-18', time: '12:30' },
      qualifying: { name: 'Qualifying', date: '2026-07-18', time: '16:00' },
      race: { name: 'Race', date: '2026-07-19', time: '15:00' },
    },
    facts: {
      circuitLength: '7.004',
      laps: 44,
      raceDistance: '308.052',
      firstGrandPrix: 1950,
      lapRecord: { time: '1:46.286', driver: 'Valtteri Bottas', year: 2018 },
    },
    countryCode: 'BE',
    timezone: 'Europe/Brussels',
    status: 'upcoming',
  },
  {
    round: 13,
    country: 'Hungary',
    location: 'Budapest',
    officialName: 'HUNGARIAN GRAND PRIX',
    circuit: 'Hungaroring',
    dateRange: '24 - 26 JUL',
    weekendStart: '2026-07-24T00:00:00+02:00',
    weekendEnd: '2026-07-26T23:59:59+02:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-07-24', time: '13:30' },
      fp2: { name: 'Practice 2', date: '2026-07-24', time: '17:00' },
      fp3: { name: 'Practice 3', date: '2026-07-25', time: '12:30' },
      qualifying: { name: 'Qualifying', date: '2026-07-25', time: '16:00' },
      race: { name: 'Race', date: '2026-07-26', time: '15:00' },
    },
    facts: {
      circuitLength: '4.381',
      laps: 70,
      raceDistance: '306.630',
      firstGrandPrix: 1986,
      lapRecord: { time: '1:16.627', driver: 'Lewis Hamilton', year: 2020 },
    },
    countryCode: 'HU',
    timezone: 'Europe/Budapest',
    status: 'upcoming',
  },
  {
    round: 14,
    country: 'Netherlands',
    location: 'Zandvoort',
    officialName: 'DUTCH GRAND PRIX',
    circuit: 'Circuit Zandvoort',
    dateRange: '21 - 23 AUG',
    weekendStart: '2026-08-21T00:00:00+02:00',
    weekendEnd: '2026-08-23T23:59:59+02:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-08-21', time: '12:30' },
      sprintQualifying: { name: 'Sprint Qualifying', date: '2026-08-21', time: '16:30' },
      sprint: { name: 'Sprint Race', date: '2026-08-22', time: '12:00' },
      qualifying: { name: 'Qualifying', date: '2026-08-22', time: '16:00' },
      race: { name: 'Race', date: '2026-08-23', time: '15:00' },
    },
    facts: {
      circuitLength: '4.259',
      laps: 72,
      raceDistance: '306.587',
      firstGrandPrix: 1952,
      lapRecord: { time: '1:11.097', driver: 'Lewis Hamilton', year: 2021 },
    },
    countryCode: 'NL',
    timezone: 'Europe/Amsterdam',
    status: 'upcoming',
  },
  {
    round: 15,
    country: 'Italy',
    location: 'Monza',
    officialName: 'ITALIAN GRAND PRIX',
    circuit: 'Autodromo Nazionale di Monza',
    dateRange: '04 - 06 SEP',
    weekendStart: '2026-09-04T00:00:00+02:00',
    weekendEnd: '2026-09-06T23:59:59+02:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-09-04', time: '13:30' },
      fp2: { name: 'Practice 2', date: '2026-09-04', time: '17:00' },
      fp3: { name: 'Practice 3', date: '2026-09-05', time: '12:30' },
      qualifying: { name: 'Qualifying', date: '2026-09-05', time: '16:00' },
      race: { name: 'Race', date: '2026-09-06', time: '15:00' },
    },
    facts: {
      circuitLength: '5.793',
      laps: 53,
      raceDistance: '306.720',
      firstGrandPrix: 1950,
      lapRecord: { time: '1:21.046', driver: 'Rubens Barrichello', year: 2004 },
    },
    countryCode: 'IT',
    timezone: 'Europe/Rome',
    status: 'upcoming',
  },
  {
    round: 16,
    country: 'Spain',
    location: 'Madrid',
    officialName: 'SPANISH(MADRID) GRAND PRIX',
    circuit: 'Circuit de Madrid',
    dateRange: '11 - 13 SEP',
    weekendStart: '2026-09-11T00:00:00+02:00',
    weekendEnd: '2026-09-13T23:59:59+02:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-09-11', time: '13:30' },
      fp2: { name: 'Practice 2', date: '2026-09-11', time: '17:00' },
      fp3: { name: 'Practice 3', date: '2026-09-12', time: '12:30' },
      qualifying: { name: 'Qualifying', date: '2026-09-12', time: '16:00' },
      race: { name: 'Race', date: '2026-09-13', time: '15:00' },
    },
    facts: {
      circuitLength: '5.470',
      laps: 57,
      raceDistance: '311.790',
      firstGrandPrix: 2026,
    },
    countryCode: 'ES',
    timezone: 'Europe/Madrid',
    status: 'upcoming',
  },
  {
    round: 17,
    country: 'Azerbaijan',
    location: 'Baku',
    officialName: 'AZERBAIJAN GRAND PRIX',
    circuit: 'Baku City Circuit',
    dateRange: '24 - 26 SEP',
    weekendStart: '2026-09-24T00:00:00+04:00',
    weekendEnd: '2026-09-26T23:59:59+04:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-09-24', time: '13:30' },
      fp2: { name: 'Practice 2', date: '2026-09-24', time: '17:00' },
      fp3: { name: 'Practice 3', date: '2026-09-25', time: '12:30' },
      qualifying: { name: 'Qualifying', date: '2026-09-25', time: '16:00' },
      race: { name: 'Race', date: '2026-09-26', time: '15:00' },
    },
    facts: {
      circuitLength: '6.003',
      laps: 51,
      raceDistance: '306.049',
      firstGrandPrix: 2016,
      lapRecord: { time: '1:43.009', driver: 'Charles Leclerc', year: 2019 },
    },
    countryCode: 'AZ',
    timezone: 'Asia/Baku',
    status: 'upcoming',
  },
  {
    round: 18,
    country: 'Singapore',
    location: 'Marina Bay',
    officialName: 'SINGAPORE GRAND PRIX',
    circuit: 'Marina Bay Street Circuit',
    dateRange: '09 - 11 OCT',
    weekendStart: '2026-10-09T00:00:00+08:00',
    weekendEnd: '2026-10-11T23:59:59+08:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-10-09', time: '16:30' },
      sprintQualifying: { name: 'Sprint Qualifying', date: '2026-10-09', time: '20:30' },
      sprint: { name: 'Sprint Race', date: '2026-10-10', time: '17:00' },
      qualifying: { name: 'Qualifying', date: '2026-10-10', time: '21:00' },
      race: { name: 'Race', date: '2026-10-11', time: '20:00' },
    },
    facts: {
      circuitLength: '4.940',
      laps: 62,
      raceDistance: '306.143',
      firstGrandPrix: 2008,
      lapRecord: { time: '1:35.867', driver: 'Lewis Hamilton', year: 2023 },
    },
    countryCode: 'SG',
    timezone: 'Asia/Singapore',
    status: 'upcoming',
  },
  {
    round: 19,
    country: 'United States',
    location: 'Austin',
    officialName: 'UNITED STATES GRAND PRIX',
    circuit: 'Circuit of the Americas',
    dateRange: '23 - 25 OCT',
    weekendStart: '2026-10-23T00:00:00-05:00',
    weekendEnd: '2026-10-25T23:59:59-05:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-10-23', time: '12:30' },
      fp2: { name: 'Practice 2', date: '2026-10-23', time: '16:00' },
      fp3: { name: 'Practice 3', date: '2026-10-24', time: '11:30' },
      qualifying: { name: 'Qualifying', date: '2026-10-24', time: '15:00' },
      race: { name: 'Race', date: '2026-10-25', time: '14:00' },
    },
    facts: {
      circuitLength: '5.513',
      laps: 56,
      raceDistance: '308.405',
      firstGrandPrix: 2012,
      lapRecord: { time: '1:36.169', driver: 'Charles Leclerc', year: 2019 },
    },
    countryCode: 'US',
    timezone: 'America/Chicago',
    status: 'upcoming',
  },
  {
    round: 20,
    country: 'Mexico',
    location: 'Mexico City',
    officialName: 'MEXICAN GRAND PRIX',
    circuit: 'Autódromo Hermanos Rodríguez',
    dateRange: '30 OCT - 01 NOV',
    weekendStart: '2026-10-30T00:00:00-06:00',
    weekendEnd: '2026-11-01T23:59:59-06:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-10-30', time: '12:30' },
      fp2: { name: 'Practice 2', date: '2026-10-30', time: '16:00' },
      fp3: { name: 'Practice 3', date: '2026-10-31', time: '11:30' },
      qualifying: { name: 'Qualifying', date: '2026-10-31', time: '15:00' },
      race: { name: 'Race', date: '2026-11-01', time: '14:00' },
    },
    facts: {
      circuitLength: '4.304',
      laps: 71,
      raceDistance: '305.354',
      firstGrandPrix: 1963,
      lapRecord: { time: '1:17.774', driver: 'Valtteri Bottas', year: 2021 },
    },
    countryCode: 'MX',
    timezone: 'America/Mexico_City',
    status: 'upcoming',
  },
  {
    round: 21,
    country: 'Brazil',
    location: 'São Paulo',
    officialName: 'BRAZILIAN GRAND PRIX',
    circuit: 'Autódromo José Carlos Pace',
    dateRange: '06 - 08 NOV',
    weekendStart: '2026-11-06T00:00:00-03:00',
    weekendEnd: '2026-11-08T23:59:59-03:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-11-06', time: '11:30' },
      fp2: { name: 'Practice 2', date: '2026-11-06', time: '15:00' },
      fp3: { name: 'Practice 3', date: '2026-11-07', time: '11:30' },
      qualifying: { name: 'Qualifying', date: '2026-11-07', time: '15:00' },
      race: { name: 'Race', date: '2026-11-08', time: '14:00' },
    },
    facts: {
      circuitLength: '4.309',
      laps: 71,
      raceDistance: '305.909',
      firstGrandPrix: 1973,
      lapRecord: { time: '1:10.540', driver: 'Valtteri Bottas', year: 2018 },
    },
    countryCode: 'BR',
    timezone: 'America/Sao_Paulo',
    status: 'upcoming',
  },
  {
    round: 22,
    country: 'United States',
    location: 'Las Vegas',
    officialName: 'LAS VEGAS GRAND PRIX',
    circuit: 'Las Vegas Strip Street Circuit',
    dateRange: '20 - 22 NOV',
    weekendStart: '2026-11-20T00:00:00-08:00',
    weekendEnd: '2026-11-22T23:59:59-08:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-11-19', time: '16:30' },
      fp2: { name: 'Practice 2', date: '2026-11-19', time: '20:00' },
      fp3: { name: 'Practice 3', date: '2026-11-20', time: '16:30' },
      qualifying: { name: 'Qualifying', date: '2026-11-20', time: '20:00' },
      race: { name: 'Race', date: '2026-11-21', time: '20:00' },
    },
    facts: {
      circuitLength: '6.120',
      laps: 50,
      raceDistance: '305.775',
      firstGrandPrix: 2023,
      lapRecord: { time: '1:35.490', driver: 'Oscar Piastri', year: 2023 },
    },
    countryCode: 'US',
    timezone: 'America/Los_Angeles',
    status: 'upcoming',
  },
  {
    round: 23,
    country: 'Qatar',
    location: 'Lusail',
    officialName: 'QATAR GRAND PRIX',
    circuit: 'Lusail International Circuit',
    dateRange: '27 - 29 NOV',
    weekendStart: '2026-11-27T00:00:00+03:00',
    weekendEnd: '2026-11-29T23:59:59+03:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-11-27', time: '16:30' },
      fp2: { name: 'Practice 2', date: '2026-11-27', time: '20:00' },
      fp3: { name: 'Practice 3', date: '2026-11-28', time: '17:30' },
      qualifying: { name: 'Qualifying', date: '2026-11-28', time: '21:00' },
      race: { name: 'Race', date: '2026-11-29', time: '19:00' },
    },
    facts: {
      circuitLength: '5.419',
      laps: 57,
      raceDistance: '308.611',
      firstGrandPrix: 2021,
      lapRecord: { time: '1:24.319', driver: 'Max Verstappen', year: 2023 },
    },
    countryCode: 'QA',
    timezone: 'Asia/Qatar',
    status: 'upcoming',
  },
  {
    round: 24,
    country: 'United Arab Emirates',
    location: 'Abu Dhabi',
    officialName: 'ABU DHABI GRAND PRIX',
    circuit: 'Yas Marina Circuit',
    dateRange: '04 - 06 DEC',
    weekendStart: '2026-12-04T00:00:00+04:00',
    weekendEnd: '2026-12-06T23:59:59+04:00',
    sessions: {
      fp1: { name: 'Practice 1', date: '2026-12-04', time: '13:30' },
      fp2: { name: 'Practice 2', date: '2026-12-04', time: '17:00' },
      fp3: { name: 'Practice 3', date: '2026-12-05', time: '14:30' },
      qualifying: { name: 'Qualifying', date: '2026-12-05', time: '18:00' },
      race: { name: 'Race', date: '2026-12-06', time: '17:00' },
    },
    facts: {
      circuitLength: '5.281',
      laps: 58,
      raceDistance: '306.183',
      firstGrandPrix: 2009,
      lapRecord: { time: '1:26.103', driver: 'Max Verstappen', year: 2021 },
    },
    countryCode: 'AE',
    timezone: 'Asia/Dubai',
    status: 'upcoming',
  },
];

// Helper function to get current/next/previous race
export function getCurrentRaceWeekend(): GrandPrix | null {
  const now = new Date();
  return f1Calendar2026.find(race => {
    const start = new Date(race.weekendStart);
    const end = new Date(race.weekendEnd);
    return now >= start && now <= end;
  }) || null;
}

export function getNextRace(): GrandPrix | null {
  const now = new Date();
  return f1Calendar2026.find(race => new Date(race.weekendStart) > now) || null;
}

export function getUpcomingRaces(count: number = 3): GrandPrix[] {
  const now = new Date();
  return f1Calendar2026
    .filter(race => new Date(race.weekendStart) > now)
    .slice(0, count);
}

export function getCompletedRaces(): GrandPrix[] {
  const now = new Date();
  return f1Calendar2026.filter(race => new Date(race.weekendEnd) < now);
}
