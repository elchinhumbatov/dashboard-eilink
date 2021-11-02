import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  workspaces: string[] = ['ws-chart', 'ws-table'];
  selectedWorkspace = '';

  constructor() {}

  ngOnInit(): void {
    this.selectedWorkspace = this.workspaces[0];
  }
}
