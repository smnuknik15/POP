import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import{HomeComponent} from './home/home.component';
import { CoureseComponent } from './courese/courese.component';
import { DetailComponent } from './detail/detail.component';
import { RegisterComponent } from './register/register.component';
import { AddhomeComponent } from './admin/addhome/addhome.component';
import { AddcouresComponent } from './admin/addcoures/addcoures.component';
import { AddcustomerComponent } from './admin/addcustomer/addcustomer.component';
import { AddoderComponent } from './admin/addoder/addoder.component';
import { CreateComponent } from './admin/addcoures/addcreate/create/create.component';


const routes:Routes=[
  { path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'courese',component:CoureseComponent},
  {path:'detail',component:DetailComponent},
  {path:'register',component:RegisterComponent},
  {path:'addhome',component:AddhomeComponent},
  {path:'addcoures',component:AddcouresComponent},
  {path:'addcustomer',component:AddcustomerComponent},
  {path:'addoder',component:AddoderComponent},
  {path:'create',component:CreateComponent},

  

];

@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
