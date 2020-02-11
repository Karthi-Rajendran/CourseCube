import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myenrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent implements OnInit {
  @Input() EnrollmentData;
  @Input() ShowEnrollments;

  constructor() { }

  ngOnInit() {
  }

}
