import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mydashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mydashboard: any = null;

  constructor() { 
    this.mydashboard = {};   //represents unstructured object
  }

  ngOnInit() {
    this.mydashboard = {
      leads: {
        leadCount: 5,
        showLeads: true,
        leadsList:[
          {'leadId': 101, 'name': 'Ned Stark', 'email': 'ned@jlc.com', 'phone': 111, 'status': 'New'},
          {'leadId': 102, 'name': 'Robb Stark', 'email': 'robb@jlc.com', 'phone': 222, 'status': 'New'},
          {'leadId': 103, 'name': 'Brandon Stark', 'email': 'brandon@jlc.com', 'phone': 333, 'status': 'New'},
          {'leadId': 104, 'name': 'Jon Stark', 'email': 'jon@jlc.com', 'phone': 444, 'status': 'New'},
          {'leadId': 105, 'name': 'Arya Stark', 'email': 'arya@jlc.com', 'phone': 555, 'status': 'New'},
        ]
      },

      enrollments:{
        enrollmentCount: 9,
        showEnrollments: true,
        enrollmentsList:[
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

}
