import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'mycourse',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  mycourses: Course[] = null;

  constructor() { 
    this.mycourses = [
      {cname: "Angular 8", cost: 10000, trainer: "Ned Stark", duration: "25Hrs"},
      {cname: "Node JS", cost: 5000, trainer: "Brendon Stark", duration: "10Hrs"},
      {cname: "MongoDB", cost: 6000, trainer: "Robb Stark", duration: "5Hrs"},
      {cname: "Express JS", cost: 4000, trainer: "Arya Stark", duration: "5Hrs"},
    ];
  }

  ngOnInit() {
  }

}
