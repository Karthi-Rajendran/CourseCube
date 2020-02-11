import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  mybid: string;
  mystudents: Student[];

  constructor() {
    this.mybid = "B-99";
    this.mystudents = [
      {sid: 101, sname: "Ned", email: "ned@cc.com", phone: 111, city: "Blore"},
      {sid: 102, sname: "Jon", email: "jon@cc.com", phone: 222, city: "Chennai"},
      {sid: 103, sname: "Robb", email: "robb@cc.com", phone: 333, city: "Hyderabad"},
      {sid: 104, sname: "Brendon", email: "brendon@cc.com", phone: 444, city: "Blore"},
      {sid: 105, sname: "Arya", email: "arya@cc.com", phone: 555, city: "Chennai"},
    ]
   }

  ngOnInit() {
  }

}
