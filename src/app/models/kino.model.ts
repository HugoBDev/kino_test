


export interface SubDetail {
  name: string;
  price: number;
  period: number 
  users: number;
}

export enum Period {
  MONTH ='MOIS',
  YEAR = 'AN',
  LIFETIME = 'A VIE'
}
