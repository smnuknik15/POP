import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AddcreateCouresService } from '../../../Service/addcreate-coures.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  errorMsg:string;
  Form:FormGroup;
  submitted=false;
  constructor(private regisSV:AddcreateCouresService
    ,private builder:FormBuilder
    ,private router:Router,
    
    
    private activatedRouter: ActivatedRoute) { }


    ngOnInit() {
      this.CreateFormData();
     }
   
     private CreateFormData(){
       this.Form = this.builder.group({
        courseId : ['',[Validators.required]],
        courseName: ['',[Validators.required]],
        coursePrice :['',[Validators.required]],
        courseDate:['',[Validators.required]],
        courseHourNum:['',[Validators.required]],
        courseDetail:['',[Validators.required]]
       });
     }

     onSubmit() {
      this.submitted = true;
      if (this.Form.invalid) {
          return;
      }
  
        console.log(this.Form.value);
        this.regisSV
          .CreateCourese(this.Form.value)
          .then(res => {
          //  this.alertSV.notify('เพิ่มข้อมูลเรียบร้อยแล้ว', 'success')
            this.router.navigate(['/', 'home']);
          })
          .catch(err => this.errorMsg = err);   
      
    }
}
