import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees:any;
  message;
  constructor(public router:Router,public service:DataService) { }

  GoToRegister()
  {
    this.router.navigate(['register']);
  }
  ngOnInit() 
  {
     let StateOfResult= this.service.GetData();

    StateOfResult.subscribe((result)=>{
      this.employees = result;
    });
        
    // this.employees = [
    //   {no : 11, name: "mahesh1", address: "pune"},
    //   {no : 12, name: "mahesh2", address: "panji"},
    //   {no : 13, name: "mahesh3", address: "mumbai"}
    // ];
  }

  Delete(empNo)
  {
    let StatusOfDelete=this.service.DeleteData(empNo);
    StatusOfDelete.subscribe((result:any)=>{
      if(result.affectedRows>0)
      {
        this.router.navigate(['/home']);
      }
      else
      {
        this.message="Something went wrong";
      }
    })
  }

}
