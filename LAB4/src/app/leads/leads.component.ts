import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myleads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  @Input() LeadsData; // To receive data & display in respective template i.e leads.component.html
  @Input() ShowLeads; // To receive data & display in respective template

  constructor() { }

  ngOnInit() {
  }

}
