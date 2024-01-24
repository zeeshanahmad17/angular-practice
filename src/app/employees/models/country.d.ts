export interface ICountry {
  id: number;
  countryName: string;
  states: IState[];
}
export interface IState {
  id: number;
  stateName: string;
  cities: ICity[];
}
export interface ICity {
  id: number;
  cityName: string;
}
