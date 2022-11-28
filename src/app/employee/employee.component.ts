import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  name = 'Cesar';
  lastname= 'Oliva';
  private age = 41;
  Company = 'Lubre Srl'

  getAge(){
    return this.age;
  }
}
