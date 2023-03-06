export interface Ant {
  name: string;
  length: number;
  color: string;
  weight: number;
  likelihood: string;
  chance: number;
}

export interface Response {
  ants: Ant[];
}
