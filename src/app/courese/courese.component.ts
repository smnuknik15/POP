import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CoureseService} from '../courese/Services/courese.service';
@Component({
  selector: 'app-courese',
  templateUrl: './courese.component.html',
  styleUrls: ['./courese.component.css']
})
export class CoureseComponent implements OnInit {
  item = [];
  errMsg ="";
  constructor(private coureseSV:CoureseService,
    private route:Router) { }
  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.coureseSV.GetCourese()
    .subscribe(
      data => this.item = data,
      error => this.errMsg = error
      );
  }

  /*gotoredetail(){
    this.route.navigate(['/','detail']);
  }*/
}
