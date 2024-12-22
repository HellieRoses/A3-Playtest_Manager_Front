export interface VideoGame {
  id: number;
  name: string;
  description: string;
  type: string;
  support: string[];
  playtests:  Playtest[];
  company: Company;
}
export interface Playtest{
  id: number;
  videoGame: VideoGame;
  begin: string;
  end: string;
  adress: string;
  company: Company;
  visibility: boolean;
  nbMaxPlayer: number;
  typePlayerSearched: string;
}

export interface Company{
  id: string;
  login: string;
  email: string;
  password: string;
  name: string;
  description: string;
  adress: string;
  contact: string;
  videoGames: VideoGame[];
  type: string;
}

export interface Player{
  id: string;
  login: string;
  email: string;
  password: string;
  name: string;
  firstName: string;
  birthdayDate: string;
  favoriteGames: string[];
  participants: VideoGame[];
  type: string;
}
