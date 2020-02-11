import { Component } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LAB1';

  //Properties
  cname: string = "Angular 8";
  cost: number = 20000;
  trainer: string = "Ned Stark";
  startDate: Date = new Date();
  isOnline: boolean = false;

  //Objects
  course: Course = {
    cname: "Angular 8",
    cost: 20000,
    trainer: "Jon Snow",
    duration: '25Hrs'
  }

  //Arrays
  courseNames: string[] = [ "Angular 8", "Node JS", "MongoDB", "Express JS", "React Js"];

  //Lists
  mycourses: Course[] = [
    {cname: "Angular 8", cost: 10000, trainer: "Ned Stark", duration: "25Hrs"},
    {cname: "Node JS", cost: 5000, trainer: "Ned Stark", duration: "25Hrs"},
    {cname: "MongoDB", cost: 6000, trainer: "Ned Stark", duration: "25Hrs"},
    {cname: "Express JS", cost: 4000, trainer: "Ned Stark", duration: "25Hrs"}
  ];

  showMessage1() {
    alert("You clicked on Button");
  }

  showMessage2(name: string, email: string) {
    alert("Hi " +name+ " Your Email is "+email);
  }

  getCourseInfo(course: Course) {
    alert("Hi Course name: "+course.cname+ " Cost: "+course.cost);
  }
}
