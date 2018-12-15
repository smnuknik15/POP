import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Courese } from '../../Models/courese';
import {Router,ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddcreateCouresService {

  public URL: string ="https://localhost:44352/api/Coures"
  constructor( private router:Router,private http:HttpClient,private route:Router,) { }

  GetCourese(){
    return this.http.get<Courese[]>(this.URL);
  }

  CreateCourese(regis)
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
  gotoDeleteData(){
    this.route.navigate(['/','deletedata']);
  }

  deleteCourse(data:any) {
    const promise = new Promise((resolve, reject) => {
      this.http.delete(this.URL+'/'+data)
        .toPromise()
        .then(
          res => {
            console.log(res);
            resolve(data);
          }
        );
    });
    console.log(data);
    return promise;
  }
}
