import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) 
  {

  }

  GetData()
  {
   return this.http.get("http://13.233.119.157:4000/employees");
  }

  UpdateData(empObject)
  {
    console.log(empObject)
    return this.http.put("http://13.233.119.157:4000/employees/" + empObject.no,empObject );
  }

  GetDataByID(No)
  {
  
   return this.http.get("http://13.233.119.157:4000/employees/" +No );
  }

  AddData(emp:any)
  {
    return this.http.post("http://13.233.119.157:4000/employees",
                          emp);
  }

  DeleteData(No)
  {
    return this.http.delete("http://13.233.119.157:4000/employees/" +No);

  }

}
