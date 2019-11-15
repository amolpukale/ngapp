import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  message;
  emp;
  constructor(public service:DataService,
              public router:Router,
              public routes:ActivatedRoute) { }

  ngOnInit()
   {
    let parameterArrivalStatus = this.routes.paramMap;

    parameterArrivalStatus.subscribe((params)=>{
      let No = params.get("No");
      console.log(params.get("No"));
      let StatusofEmpSearched= this.service.GetDataByID(No);

      StatusofEmpSearched.subscribe((result:any)=>{
        //console.log(result.no);
     
        if(result.length>0)
        {
          this.emp = result[0];
         console.log(this.emp.no);
          console.log(this.emp.name);
          console.log(this.emp.address);
          this.message = "Record found!"
          
        }
        else
        {
          this.message = "Record not found!"
        }
      }); 

    });
  }
  Update()
  {
    let statusOfUpdate= this.service.UpdateData(this.emp);
    statusOfUpdate.subscribe((result:any)=>{
      console.log(result);
      if(result.affectedRows>0)
      {
        this.router.navigate(['home']);
      }
      else{
        this.message = "Something went wrong!";
      }
    });
  }

}
