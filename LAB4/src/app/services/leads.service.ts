import { Injectable } from '@angular/core';
import { Leads } from '../models/leads.model';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  private myleads: Leads;

  public getLeadsData(): Leads {
    return this.myleads;
  }

  constructor() { 
    this.myleads = new Leads();
    this.myleads = {
      leadCount: 5,
      leadShow: true,
      leadList:[
        {'leadId': 101, 'name': 'Ned Stark', 'email': 'ned@jlc.com', 'phone': 111, 'status': 'New'},
        {'leadId': 102, 'name': 'Robb Stark', 'email': 'robb@jlc.com', 'phone': 222, 'status': 'New'},
        {'leadId': 103, 'name': 'Brandon Stark', 'email': 'brandon@jlc.com', 'phone': 333, 'status': 'New'},
        {'leadId': 104, 'name': 'Jon Stark', 'email': 'jon@jlc.com', 'phone': 444, 'status': 'New'},
        {'leadId': 105, 'name': 'Arya Stark', 'email': 'arya@jlc.com', 'phone': 555, 'status': 'New'},
      ]
    }
  }
  
}
