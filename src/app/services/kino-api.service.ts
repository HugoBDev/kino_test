import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KinoApiService {
  constructor() {}

  BASE_URL: string = 'http://preprod.kinomap.com:3333';
  

 

  getScore() : Promise<any> {
    const url = `${this.BASE_URL}/score`;
    return new Promise<any>((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((e) => reject(e));
    })
  }
  getSubDetails() : Promise<any> {
    const url = `${this.BASE_URL}/subscriptions`;
    return new Promise<any>((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((e) => reject(e));
    })
  }
  
  getFAQ() : Promise<any> {
    const url = `${this.BASE_URL}/faq `;
    return new Promise<any>((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((e) => reject(e));
    })
  }
  getFreePeriod() : Promise<any> {
    const url = `${this.BASE_URL}/free-period`;
    return new Promise<any>((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((e) => reject(e));
    })
  }
 
}
