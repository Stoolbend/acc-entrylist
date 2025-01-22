/*
Copyright (C) 2023 Conor Morgan
This file is part of ACC Tooklit, which is free software: you can 
redistribute it and/or modify it under the terms of the 
GNU General Public License as published by the Free Software Foundation,
either version 3 of the License, or (at your option) any later version.

ACC Tooklit is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

export type BasicType<T> = {
  name: string
  value: T
}

//#region Session types
export const SessionTypes = [
  {
    name: 'Practice',
    value: 'P',
  },
  {
    name: 'Qualifying',
    value: 'Q',
  },
  {
    name: 'Race',
    value: 'R',
  },
] as BasicType<string>[]
//#endregion Session types

//#region Cup categories
export type CupCategoryOption = {
  short: string
  colors: {
    text: string
    background: string
    border: string
  }
} & BasicType<number>
export const CupCategory = {
  Overall: 0,
  ProAm: 1,
  Am: 2,
  Silver: 3,
  National: 4,
}
export const CupCategories = [
  {
    name: 'Overall',
    value: CupCategory.Overall,
    short: 'PRO',
    colors: {
      text: '#000',
      background: '#fff',
      border: '#000',
    },
  },
  {
    name: 'Pro-Am',
    value: CupCategory.ProAm,
    short: 'PRO-AM',
    colors: {
      text: '#fff',
      background: '#000',
      border: '#fff',
    },
  },
  {
    name: 'Am',
    value: CupCategory.Am,
    short: 'AM',
    colors: {
      text: '#fff',
      background: '#ff0000',
      border: '#fff',
    },
  },
  {
    name: 'Silver',
    value: CupCategory.Silver,
    short: 'SILVER',
    colors: {
      text: '#fff',
      background: '#aaaaaa',
      border: '#fff',
    },
  },
  {
    name: 'National',
    value: CupCategory.National,
    short: 'NAT.',
    colors: {
      text: '#fff',
      background: '#fff',
      border: '#fff',
    },
  },
] as CupCategoryOption[]
//#endregion Cup categories

//#region Driver categories
export const DriverCategory = {
  Bronze: 0,
  Silver: 1,
  Gold: 2,
  Platinum: 3,
}
export type DriverCategoryOption = {
  short: string
} & BasicType<number>
export const DriverCategories = [
  {
    name: 'Bronze',
    short: 'Bronze',
    value: DriverCategory.Bronze,
  },
  {
    name: 'Silver',
    short: 'Silver',
    value: DriverCategory.Silver,
  },
  {
    name: 'Gold',
    short: 'Gold',
    value: DriverCategory.Gold,
  },
  {
    name: 'Platinum',
    short: 'Plat',
    value: DriverCategory.Platinum,
  },
] as DriverCategoryOption[]
//#endregion Driver categories

//#region DLC
export enum DLC {
  AmericanTrackPack = 'American Track Pack',
  BritishGT = 'British GT Pack',
  ChallengersPack = 'Challengers Pack',
  GTWC2020 = '2020 GT World Challenge Pack',
  GTWC2023 = '2023 GT World Challenge Pack',
  GT4 = 'GT4 Pack',
  ICGT = 'Intercontinental GT Pack',
}
//#endregion DLC

//#region Cars
export enum Class {
  GT3 = 'gt3',
  GT4 = 'gt4',
  GTC = 'gtc',
  TCX = 'tcx',
}
export type Car = BasicType<number> & {
  year: number
  class: Class
  dlc?: DLC
}
export const Cars = [
  {
    name: 'Porsche 991 GT3 R',
    value: 0,
    year: 2018,
    class: Class.GT3,
  },
  {
    name: 'Mercedes-AMG GT3',
    value: 1,
    year: 2015,
    class: Class.GT3,
  },
  {
    name: 'Ferrari 488 GT3',
    value: 2,
    year: 2018,
    class: Class.GT3,
  },
  {
    name: 'Audi R8 LMS',
    value: 3,
    year: 2015,
    class: Class.GT3,
  },
  {
    name: 'Lamborghini Huracán GT3',
    value: 4,
    year: 2015,
    class: Class.GT3,
  },
  {
    name: 'McLaren 650S GT3',
    value: 5,
    year: 2015,
    class: Class.GT3,
  },
  {
    name: 'Nissan GT-R Nismo GT3',
    value: 6,
    year: 2018,
    class: Class.GT3,
  },
  {
    name: 'BMW M6 GT3',
    value: 7,
    year: 2017,
    class: Class.GT3,
  },
  {
    name: 'Bentley Continental GT3',
    value: 8,
    year: 2018,
    class: Class.GT3,
  },
  {
    name: 'Porsche 991 II GT3 Cup',
    value: 9,
    year: 2017,
    class: Class.GTC,
  },
  {
    name: 'Nissan GT-R Nismo GT3',
    value: 10,
    year: 2015,
    class: Class.GT3,
  },
  {
    name: 'Bentley Continental GT3',
    value: 11,
    year: 2015,
    class: Class.GT3,
  },
  {
    name: 'AMR V12 Vantage GT3',
    value: 12,
    year: 2013,
    class: Class.GT3,
  },
  {
    name: 'Reiter Engineering R-EX GT3',
    value: 13,
    year: 2017,
    class: Class.GT3,
  },
  {
    name: 'Emil Frey Jaguar G3',
    value: 14,
    year: 2012,
    class: Class.GT3,
  },
  {
    name: 'Lexus RC F GT3',
    value: 15,
    year: 2016,
    class: Class.GT3,
  },
  {
    name: 'Lamborghini Huracan GT3 Evo',
    value: 16,
    year: 2019,
    class: Class.GT3,
  },
  {
    name: 'Honda NSX GT3',
    value: 17,
    year: 2017,
    class: Class.GT3,
  },
  {
    name: 'Lamborghini Huracan SuperTrofeo',
    value: 18,
    year: 2015,
    class: Class.GTC,
  },
  {
    name: 'Audi R8 LMS Evo',
    value: 19,
    year: 2019,
    class: Class.GT3,
  },
  {
    name: 'AMR V8 Vantage',
    value: 20,
    year: 2019,
    class: Class.GT3,
  },
  {
    name: 'Honda NSX GT3 Evo',
    value: 21,
    year: 2019,
    class: Class.GT3,
  },
  {
    name: 'McLaren 720S GT3',
    value: 22,
    year: 2019,
    class: Class.GT3,
  },
  {
    name: 'Porsche 991 II GT3 R',
    value: 23,
    year: 2019,
    class: Class.GT3,
  },
  {
    name: 'Ferrari 488 GT3 Evo',
    value: 24,
    year: 2020,
    class: Class.GT3,
    dlc: DLC.GTWC2020,
  },
  {
    name: 'Mercedes-AMG GT3',
    value: 25,
    year: 2020,
    class: Class.GT3,
    dlc: DLC.GTWC2020,
  },
  {
    name: 'Ferrari 488 Challenge Evo',
    value: 26,
    year: 2020,
    class: Class.GTC,
    dlc: DLC.ChallengersPack,
  },
  {
    name: 'BMW M2 Club Sport Racing',
    value: 27,
    year: 2020,
    class: Class.TCX,
    dlc: DLC.ChallengersPack,
  },
  {
    name: 'Porsche 992 GT3 Cup',
    value: 28,
    year: 2021,
    class: Class.GTC,
    dlc: DLC.ChallengersPack,
  },
  {
    name: 'Lamborghini Huracán SuperTrofeo EVO2',
    value: 29,
    year: 2021,
    class: Class.GTC,
    dlc: DLC.ChallengersPack,
  },
  {
    name: 'BMW M4 GT3',
    value: 30,
    year: 2022,
    class: Class.GT3,
  },
  {
    name: 'Audi R8 LMS GT3 Evo 2',
    value: 31,
    year: 2022,
    class: Class.GT3,
    dlc: DLC.ChallengersPack,
  },
  {
    name: 'Ferrari 296 GT3',
    value: 32,
    year: 2023,
    class: Class.GT3,
    dlc: DLC.GTWC2023,
  },
  {
    name: 'Lamborghini Huracan GT3 Evo 2',
    value: 33,
    year: 2023,
    class: Class.GT3,
    dlc: DLC.GTWC2023,
  },
  {
    name: 'Porsche 992 GT3 R',
    value: 34,
    year: 2023,
    class: Class.GT3,
    dlc: DLC.GTWC2023,
  },
  {
    name: 'McLaren 720S GT3 Evo',
    value: 35,
    year: 2023,
    class: Class.GT3,
  },
  {
    name: 'Ford Mustang GT3',
    value: 36,
    year: 2024,
    class: Class.GT3,
  },
  {
    name: 'Alpine A110 GT4',
    value: 50,
    year: 2018,
    class: Class.GT4,
    dlc: DLC.GT4,
  },
  {
    name: 'Aston Martin Vantage GT4',
    value: 51,
    year: 2018,
    class: Class.GT4,
    dlc: DLC.GT4,
  },
  {
    name: 'Audi R8 LMS GT4',
    value: 52,
    year: 2018,
    class: Class.GT4,
    dlc: DLC.GT4,
  },
  {
    name: 'BMW M4 GT4',
    value: 53,
    year: 2018,
    class: Class.GT4,
    dlc: DLC.GT4,
  },
  {
    name: 'Chevrolet Camaro GT4',
    value: 55,
    year: 2017,
    class: Class.GT4,
    dlc: DLC.GT4,
  },
  {
    name: 'Ginetta G55 GT4',
    value: 56,
    year: 2012,
    class: Class.GT4,
    dlc: DLC.GT4,
  },
  {
    name: 'KTM X-Bow GT4',
    value: 57,
    year: 2016,
    class: Class.GT4,
    dlc: DLC.GT4,
  },
  {
    name: 'Maserati MC GT4',
    value: 58,
    year: 2016,
    class: Class.GT4,
    dlc: DLC.GT4,
  },
  {
    name: 'McLaren 570S GT4',
    value: 59,
    year: 2016,
    class: Class.GT4,
    dlc: DLC.GT4,
  },
  {
    name: 'Mercedes AMG GT4',
    value: 60,
    year: 2016,
    class: Class.GT4,
    dlc: DLC.GT4,
  },
  {
    name: 'Porsche 718 Cayman GT4 Clubsport',
    value: 61,
    year: 2019,
    class: Class.GT4,
    dlc: DLC.GT4,
  },
] as Car[]
//#endregion Cars

//#region Tracks
export type Track = BasicType<string> & {
  circuitName: string
  year: number
  dlc?: DLC
}
export const Tracks = [
  {
    name: 'Barcelona',
    circuitName: 'Circuit de Barcelona-Catalunya',
    value: 'barcelona',
    year: 2018,
  },
  {
    name: 'Brands Hatch',
    circuitName: 'Brands Hatch Circuit',
    value: 'brands_hatch',
    year: 2018,
  },
  {
    name: 'Circuit of the Americas',
    circuitName: 'Circuit of the Americas',
    value: 'cota',
    year: 2022,
    dlc: DLC.AmericanTrackPack,
  },
  {
    name: 'Donington Park',
    circuitName: 'Donington Park',
    value: 'donington',
    year: 2019,
    dlc: DLC.BritishGT,
  },
  {
    name: 'Hungaroring',
    circuitName: 'Hungaroring Circuit',
    value: 'hungaroring',
    year: 2018,
  },
  {
    name: 'Imola',
    circuitName: 'Autodromo Enzo e Dino Ferrari',
    value: 'imola',
    year: 2020,
    dlc: DLC.GTWC2020,
  },
  {
    name: 'Indianapolis',
    circuitName: 'Indianapolis Motor Speedway',
    value: 'indianapolis',
    year: 2022,
    dlc: DLC.AmericanTrackPack,
  },
  {
    name: 'Kyalami',
    circuitName: 'Kyalami Racing Circuit',
    value: 'kyalami',
    year: 2019,
    dlc: DLC.ICGT,
  },
  {
    name: 'Laguna Seca',
    circuitName: 'WeatherTech Raceway Laguna Seca',
    value: 'laguna_seca',
    year: 2019,
    dlc: DLC.ICGT,
  },
  {
    name: 'Misano',
    circuitName: 'Misano World Circuit',
    value: 'misano',
    year: 2018,
  },
  {
    name: 'Monza',
    circuitName: 'Autodromo Nazionale Monza',
    value: 'monza',
    year: 2018,
  },
  {
    name: 'Mount Panorama (Bathurst)',
    circuitName: 'Mount Panorama Circuit',
    value: 'mount_panorama',
    year: 2019,
    dlc: DLC.ICGT,
  },
  {
    name: 'Nürburgring - Grand Prix',
    circuitName: 'Nürburgring - Grand Prix Circuit',
    value: 'nurburgring',
    year: 2018,
  },
  {
    name: 'Nürburgring - Nordschleife',
    circuitName: 'Nürburgring - Nordschleife Grand Prix Circuit',
    value: 'nurburgring_24h',
    year: 2024,
  },
  {
    name: 'Oulton Park',
    circuitName: 'Oulton Park Circuit',
    value: 'oulton_park',
    year: 2019,
    dlc: DLC.BritishGT,
  },
  {
    name: 'Paul Ricard',
    circuitName: 'Circuit Paul Ricard',
    value: 'paul_ricard',
    year: 2018,
  },
  {
    name: 'Red Bull Ring',
    circuitName: 'Red Bull Ring',
    value: 'red_bull_ring',
    year: 2024,
  },
  {
    name: 'Silverstone',
    circuitName: 'Silverstone Circuit',
    value: 'silverstone',
    year: 2018,
  },
  {
    name: 'Snetterton',
    circuitName: 'Snetterton Circuit',
    value: 'snetterton',
    year: 2019,
    dlc: DLC.BritishGT,
  },
  {
    name: 'Spa-Francorchamps',
    circuitName: 'Circuit de Spa-Francorchamps',
    value: 'spa',
    year: 2018,
  },
  {
    name: 'Suzuka',
    circuitName: 'Suzuka Circuit',
    value: 'suzuka',
    year: 2019,
    dlc: DLC.ICGT,
  },
  {
    name: 'Valencia',
    circuitName: 'Circuit de la Comunitat Valenciana Ricardo Tormo',
    value: 'valencia',
    year: 2023,
    dlc: DLC.GTWC2023,
  },
  {
    name: 'Watkins Glen',
    circuitName: 'Watkins Glen International',
    value: 'watkins_glen',
    year: 2022,
    dlc: DLC.AmericanTrackPack,
  },
  {
    name: 'Zandvoort',
    circuitName: 'Circuit Park Zandvoort',
    value: 'zandvoort',
    year: 2018,
  },
  {
    name: 'Zolder',
    circuitName: 'Circuit Zolder',
    value: 'zolder',
    year: 2018,
  },
] as Track[]
//#endregion Tracks

//#region Settings
export const SettingsCarGroup = {
  FreeForAll: 'FreeForAll',
  GT3: 'GT3',
  GT4: 'GT4',
  GTC: 'GTC',
}
export const SettingsFormationLapType = {
  Free: 0,
  OldLimiterLap: 1,
  Default: 3,
  OneLap: 4,
  Short: 5,
}
//#endregion
