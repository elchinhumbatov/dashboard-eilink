import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace-charts',
  templateUrl: './workspace-charts.component.html',
  styleUrls: ['./workspace-charts.component.scss'],
})
export class WorkspaceChartsComponent implements OnInit, OnDestroy {
  displayBasic = false;
  lineCharts: LineChart[] = [];
  datasetLabel = '';
  title = '';
  labels: string[] = [];
  values: string[] = [];

  constructor() {}

  ngOnInit(): void {
    const lineChartsFromStore = localStorage.getItem('lineCharts');
    if (lineChartsFromStore !== null) {
      this.lineCharts = JSON.parse(lineChartsFromStore);
    }
  }

  createChart(): void {
    const chart: LineChart = {
      title: this.title,
      datasetLabel: this.datasetLabel,
      labels: this.labels,
      values: this.values
    };
    this.lineCharts.push(chart);
    this.displayBasic = false;
    this.title = '';
    this.datasetLabel = '';
    this.labels = [];
    this.values = [];
  }
  test(): void {
    console.log(this.labels);
  }

  ngOnDestroy(): void {
    localStorage.setItem('lineCharts', JSON.stringify(this.lineCharts));
  }
}

export interface LineChart {
  title?: string;
  datasetLabel?: string;
  labels?: string[];
  values?: string[];
}
