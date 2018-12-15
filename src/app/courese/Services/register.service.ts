import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Register } from '../../Models/register';
import {Router,ActivatedRoute} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public URL: string ="https://localhost:44352/api/Customers"
  constructor( private router:Router,private http:HttpClient) { }


GetRegister(){
  return this.http.get<Register[]>(this.URL);
}
CreateRegister(regis)
  {
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.URL, regis)
        .toPromise()
        .then(
          res => {
            //sec
            //this.router.navigate(['/', 'home']);
            console.log(res);
            resolve(regis);
          }
        );
      });
      return promise;
  }
}