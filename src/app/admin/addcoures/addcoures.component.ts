import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddcreateCouresService} from '../../admin/Service/addcreate-coures.service';
import{AlertService} from '../../shared/servicesalert/alert.service';


@Component({
  selector: 'app-addcoures',
  templateUrl: './addcoures.component.html',
  styleUrls: ['./addcoures.component.css']
})
export class AddcouresComponent implements OnInit {
  item = [];
  errMsg ="";
  constructor(private coureseSV:AddcreateCouresService,
    private route:Router,private alertSV:AlertService){ }

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

    onDeleteData(personID) {
      const result = confirm('ยืนยันการลบ?');
    if (result) {
      const data = {
        personID: personID
      };
      this.coureseSV
      .deleteCourse(data)
      .then(() => {
        this.alertSV.notify('ลบข้อมูลเรียบร้อยแล้ว','info');
        this.fetchData();
      }).catch(err => this.errMsg = err);
    }
  }
}
