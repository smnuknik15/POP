import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';
import {Courese} from '../../Models/courese';

@Injectable({
  providedIn: 'root'
})
export class CoureseService {
  public URL: string ="https://localhost:44352/api/Coures"

  constructor( private router:Router,private http:HttpClient) { }


GetCourese(){
  return this.http.get<Courese[]>(this.URL);
}
}