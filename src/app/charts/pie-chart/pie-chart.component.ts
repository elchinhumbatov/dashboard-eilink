import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AngularResizeElementDirection,
  AngularResizeElementEvent,
} from 'angular-resize-element';
import { PieChart } from 'src/app/workspaces/ws-pie/ws-pie.component';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() idx: number | any;
  @Input() pieData: PieChart = {
    title: '',
    labels: [],
    datasets: [],
  };
  @Output() handleDeleteEmitter = new EventEmitter<number>();
  @Output() handleEditEmitter = new EventEmitter<number>();
  public readonly AngularResizeElementDirection = AngularResizeElementDirection;
  data: any;
  public pieSizes: any = {};

  constructor() {}

  ngOnInit(): void {
    const localSizes: any = localStorage.getItem(`pieSizes${this.idx}`);
    if (localSizes !== null) {
      this.pieSizes = JSON.parse(localSizes);
    }
    this.data = {
      labels: this.pieData.labels,
      datasets: this.pieData.datasets
    };
  }

  onResize(evt: AngularResizeElementEvent): void {
    this.pieSizes.width = evt.currentWidthValue;
    this.pieSizes.height = evt.currentWidthValue * 1.1;
    // this.sizes.top = evt.currentTopValue;
    // this.sizes.left = evt.currentLeftValue;
    localStorage.setItem(`pieSizes${this.idx}`, JSON.stringify(this.pieSizes));
  }

  handleEdit(): void {
    this.handleEditEmitter.emit(this.idx);
  }

  handleDelete(): void {
    localStorage.removeItem(`pieSizes${this.idx}`);
    this.handleDeleteEmitter.emit(this.idx);
  }
}
