import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment,practice } from '../environment/environment'



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }
   http = inject(HttpClient)
  //  usersUrl:string = 'https://jsonplaceholder.typicode.com/users';


  getStarRating(){
    return this.http.get(environment.baseurl+practice.starRating)
  }
}