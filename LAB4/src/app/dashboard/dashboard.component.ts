import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../models/dashboard.model';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'mydashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
//  mydashboard: any = null;
mydashboard: Dashboard;
mydashboardTitle: string = null;

  constructor(private mydbs: DashboardService) { 
    //this.mydashboard = {};   //represents unstructured object
    this.mydashboardTitle = mydbs.getDashboardTitle();
    this.mydashboard = mydbs.getDashboardData();
  }

  ngOnInit() { }
  }


