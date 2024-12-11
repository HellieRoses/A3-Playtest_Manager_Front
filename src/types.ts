export interface VideoGame {
  id: number;
  name: string;
  type: string;
  support: string;
  playtests:  Playtest[]
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
}

export interface Company{
  id: number;
  login: string;
  email: string;
  password: string;
  name: string;
  description: string;
  adress: string;
  contact: string;
}
