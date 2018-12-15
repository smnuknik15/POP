import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { RegisterService } from '../courese/Services/register.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMsg:string;
  Form:FormGroup;
  submitted=false;
  constructor(private regisSV:RegisterService
    ,private builder:FormBuilder
    ,private router:Router,
    
    
    private activatedRouter: ActivatedRoute) {

     }

  
  ngOnInit() {
   this.CreateFormData();
  }

  private CreateFormData(){
    this.Form = this.builder.group({
      ctmIdcard : ['',[Validators.required]],
      ctmName: ['',[Validators.required]],
      ctmLasname :['',[Validators.required]],
      ctmTel:['',[Validators.required]],
      ctmEmail:['',[Validators.required]],
      ctmAddress:['',[Validators.required]],
      ctmTambon:['',[Validators.required]],
      ctmAmpur:['',[Validators.required]],
      ctmProvice:['',[Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.Form.invalid) {
        return;
    }

      console.log(this.Form.value);
      this.regisSV
        .CreateRegister(this.Form.value)
        .then(res => {
        //  this.alertSV.notify('เพิ่มข้อมูลเรียบร้อยแล้ว', 'success')
          this.router.navigate(['/', 'home']);
        })
        .catch(err => this.errorMsg = err);   
    
  }



}
