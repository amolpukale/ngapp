import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router:Router,public service:DataService) { }
  AddEmp(myForm)
  {
   // alert("In AddEmp function");
   //console.log(myForm.form.value);
   let emp=myForm.form.value;
   let stateResult=this.service.AddData(emp);
   stateResult.subscribe((result)=>{
     console.log(result);
     this.router.navigate(['home']);
   });
  }

  ngOnInit() {
  }

}
