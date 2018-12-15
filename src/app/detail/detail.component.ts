import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CoureseService} from '../courese/Services/courese.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private route:Router
   ) { }

  ngOnInit() {
  }

  gotoregister(){
    this.route.navigate(['/','register']);
  }

}
