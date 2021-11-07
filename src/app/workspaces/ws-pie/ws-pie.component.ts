import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ws-pie',
  templateUrl: './ws-pie.component.html',
  styleUrls: ['./ws-pie.component.scss']
})
export class WsPieComponent implements OnInit {
  displayBasic = false;
  isUpdate = false;
  updateId: number | undefined;
  pies: PieChart[] = [];
  title = '';
  labels: string[] = [];
  dataset = new PieDataset([], []);
  datasets: PieDataset[] = [this.dataset];

  constructor() { }

  ngOnInit(): void {
    const pieChartsFromStore = localStorage.getItem('pies');
    if (pieChartsFromStore !== null) {
      this.pies = JSON.parse(pieChartsFromStore);
    }
  }

  handleColor(e: any, idx: number): void {
    this.datasets[0].backgroundColor[idx] = e.value;
  }

  createPie(): void {
    console.log(this.datasets)
    const newPie: PieChart = {
      title: this.title,
      labels: this.labels,
      datasets: this.datasets,
    };
    this.pies.push(newPie);
    localStorage.setItem('pies', JSON.stringify(this.pies));
    this.displayBasic = false;
  }

  updatePie(): void {
    if (this.updateId !== undefined) {
      this.pies[this.updateId] = {
        title: this.title,
        labels: this.labels,
        datasets: this.datasets,
      };
      localStorage.setItem('pies', JSON.stringify(this.pies));
      this.displayBasic = false;
    };
  }

  onEdit(id: number): void {
    this.updateId = id;
    const pie: PieChart = this.pies[id];
    this.title = pie.title;
    this.labels = pie.labels;
    this.datasets = pie.datasets;
    this.displayBasic = true;
    this.isUpdate = true;
  }

  onDelete(id: number): void {
    this.pies.splice(id, 1);
    localStorage.setItem('pies', JSON.stringify(this.pies));
  }

  resetData(): void {
    this.title = '';
    this.labels = [];
    this.datasets = [new PieDataset([], [])];
  }
}

export interface PieChart {
  title: string;
  labels: string[];
  datasets: PieDataset[];
}

export class PieDataset {
  constructor(data: number[], backgroundColor: string[]) {
    this.data = data;
    this.backgroundColor = backgroundColor;
  }
  data;
  backgroundColor;
}
