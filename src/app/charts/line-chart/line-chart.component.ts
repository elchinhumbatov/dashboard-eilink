import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  AngularResizeElementDirection,
  AngularResizeElementEvent,
} from 'angular-resize-element';

import { LineChart } from 'src/app/workspaces/workspace-charts/workspace-charts.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnDestroy {
  @Input() idx: number | undefined;
  @Input() chartData: LineChart = {};
  public readonly AngularResizeElementDirection = AngularResizeElementDirection;
  public sizes: any = {};
  basicData: any;
  basicOptions: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.chartData);
    const localSizes: any = localStorage.getItem(`sizes${this.idx}`);
    if (localSizes !== null) {
      this.sizes = JSON.parse(localSizes);
    }
    this.basicData = {
      // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      labels: this.chartData.labels,
      datasets: [
        {
          // label: 'First Dataset',
          label: this.chartData.datasetLabel,
          // data: [65, 59, 80, 81, 56, 55, 40],
          data: this.chartData.values,
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        }
      ],
    };
    this.basicOptions = {
      scales: {
        y: {
            beginAtZero: true
        }
      }
    };
  }

  ngOnDestroy(): void {
    this.setSizesToLocal();
  }

  onResize(evt: AngularResizeElementEvent): void {
    this.sizes.width = evt.currentWidthValue;
    this.sizes.height = evt.currentWidthValue / 1.75;
    // this.sizes.top = evt.currentTopValue;
    // this.sizes.left = evt.currentLeftValue;
    this.setSizesToLocal();
  }

  setSizesToLocal(): void {
    if (Object.keys(this.sizes).length !== 0) {
      localStorage.setItem(`sizes${this.idx}`, JSON.stringify(this.sizes));
    }
  }

}
