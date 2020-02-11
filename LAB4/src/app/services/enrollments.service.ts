import { Injectable } from '@angular/core';
import { Enrollments } from '../models/enrollments.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {
  private myenrollments: Enrollments = null;
  
  public getEnrollmentsData(): Enrollments{
    return this.myenrollments;    
  }

  constructor() { 
    this.myenrollments = new Enrollments();
    this.myenrollments = {
      enrollmentCount: 9,
      enrollmentShow: true,
      enrollmentList:[
        {'sid':101, 'sname': 'Ned Stark', 'email': 'ned@jlc.com', 'phone': 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 10000},
        {'sid':102, 'sname': 'Jon Stark', 'email': 'jon@jlc.com', 'phone': 222, 'course': 'Angular', 'feepaid': 10000, 'feebal': 10000},
        {'sid':103, 'sname': 'Robb Stark', 'email': 'robb@jlc.com', 'phone': 333, 'course': 'J2EE', 'feepaid': 10000, 'feebal': 10000},
        {'sid':104, 'sname': 'Brandon Stark', 'email': 'brandon@jlc.com', 'phone': 444, 'course': 'Node', 'feepaid': 10000, 'feebal': 10000},
        {'sid':105, 'sname': 'Sansa Stark', 'email': 'sansa@jlc.com', 'phone': 555, 'course': 'Express', 'feepaid': 10000, 'feebal': 10000},
        {'sid':106, 'sname': 'Arya Stark', 'email': 'arya@jlc.com', 'phone': 666, 'course': 'MongoDB', 'feepaid': 10000, 'feebal': 10000},
        {'sid':107, 'sname': 'Ned Stark', 'email': 'ned@jlc.com', 'phone': 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 10000},
        {'sid':108, 'sname': 'Ned Stark', 'email': 'ned@jlc.com', 'phone': 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 10000},
        {'sid':109, 'sname': 'Ned Stark', 'email': 'ned@jlc.com', 'phone': 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 10000},

      ]
    }
  }
}
