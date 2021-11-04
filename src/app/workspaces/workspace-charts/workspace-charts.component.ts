import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace-charts',
  templateUrl: './workspace-charts.component.html',
  styleUrls: ['./workspace-charts.component.scss'],
})
export class WorkspaceChartsComponent implements OnInit, OnDestroy {
  displayBasic = false;
  isUpdate = false;
  updateId: number | undefined;
  lineCharts: LineChart[] = [];
  lineChartsCopy: LineChart[] = [];
  title = '';
  labels: string[] = [];
  dataset = new Dataset('', [], '#42A5F5');
  datasets = [this.dataset];

  constructor() {}

  ngOnInit(): void {
    const lineChartsFromStore = localStorage.getItem('lineCharts');
    if (lineChartsFromStore !== null) {
      this.lineCharts = JSON.parse(lineChartsFromStore);
      this.lineChartsCopy = [...this.lineCharts];
    }
  }

  ngOnDestroy(): void {
    localStorage.setItem('lineCharts', JSON.stringify(this.lineCharts));
  }

  addDataset(): void {
    let dataset = new Dataset('', [], '#42A5F5');
    this.datasets.push(dataset);
  }
  deleteDataset(i: number): void {
    this.datasets.splice(i, 1);
  }

  createChart(): void {
    const newChart: LineChart = {
      title: this.title,
      labels: this.labels,
      datasets: this.datasets,
    };
    this.lineCharts.push(newChart);
    localStorage.setItem('lineCharts', JSON.stringify(this.lineCharts));
    this.displayBasic = false;
  }

  updateChart(): void {
    if (this.updateId !== undefined) {
      this.lineCharts[this.updateId] = {
        title: this.title,
        labels: this.labels,
        datasets: this.datasets,
      };
      localStorage.setItem('lineCharts', JSON.stringify(this.lineCharts));
      this.displayBasic = false;
    };
  }

  onEdit(e: number): void {
    this.updateId = e;
    const chart: LineChart = this.lineCharts[e];
    this.title = chart.title;
    this.labels = chart.labels;
    this.datasets = chart.datasets;
    this.displayBasic = true;
    this.isUpdate = true;
  }

  onDelete(e: number): void {
    this.lineCharts.splice(e, 1);
    localStorage.setItem('lineCharts', JSON.stringify(this.lineCharts));
  }

  resetData(): void {
    this.title = '';
    this.labels = [];
    this.datasets = [new Dataset('', [], '#42A5F5')];
  }
}

export interface LineChart {
  title: string;
  labels: string[];
  datasets: Dataset[];
}
class Dataset {
  constructor(label: string, data: string[], borderColor: string) {
    this.label = label;
    this.data = data;
    this.fill = false;
    this.borderColor = borderColor;
    this.tension = 0.4;
  }
  label;
  data;
  fill;
  borderColor;
  tension;
}