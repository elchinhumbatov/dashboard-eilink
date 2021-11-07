import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  workspaces: string[] = ['ws-chart', 'ws-pie', 'ws-table'];
  selectedWorkspace = '';

  constructor() {}

  ngOnInit(): void {
    let workspaceFromLocal = localStorage.getItem('workspace');
    if (workspaceFromLocal !== null) {
      this.selectedWorkspace = workspaceFromLocal;
    } else {
      this.selectedWorkspace = this.workspaces[0];
    }
  }

  ngOnDestroy(): void {
    localStorage.setItem(`workspace`, this.selectedWorkspace);
  }
}
