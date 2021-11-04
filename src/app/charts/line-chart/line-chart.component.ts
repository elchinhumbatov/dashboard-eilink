import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
export class LineChartComponent implements OnInit {
  @Input() idx: number | any;
  @Input() chartData: LineChart = {
    title: '',
    labels: [],
    datasets: [],
  };
  @Output() handleDeleteEmitter = new EventEmitter<number>();
  @Output() handleEditEmitter = new EventEmitter<number>();
  public readonly AngularResizeElementDirection = AngularResizeElementDirection;
  public sizes: any = {};
  basicData: any;
  basicOptions: any;

  constructor() { }

  ngOnInit(): void {
    const localSizes: any = localStorage.getItem(`sizes${this.idx}`);
    if (localSizes !== null) {
      this.sizes = JSON.parse(localSizes);
    }
    this.basicData = {
      labels: this.chartData.labels,
      datasets: this.chartData.datasets,
    };
    this.basicOptions = {
      scales: {
        y: {
            beginAtZero: true
        }
      }
    };
  }

  onResize(evt: AngularResizeElementEvent): void {
    this.sizes.width = evt.currentWidthValue;
    this.sizes.height = evt.currentWidthValue / 1.7;
    // this.sizes.top = evt.currentTopValue;
    // this.sizes.left = evt.currentLeftValue;
    localStorage.setItem(`sizes${this.idx}`, JSON.stringify(this.sizes));
  }

  handleEdit(): void {
    this.handleEditEmitter.emit(this.idx);
  }

  handleDelete(): void {
    localStorage.removeItem(`sizes${this.idx}`);
    this.handleDeleteEmitter.emit(this.idx);
  }

}
