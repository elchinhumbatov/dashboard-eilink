import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace-tables',
  templateUrl: './workspace-tables.component.html',
  styleUrls: ['./workspace-tables.component.scss'],
})
export class WorkspaceTablesComponent implements OnInit {
  colsInputs: Column[] = [];
  displayBasic = false;
  columnCount = 0;
  tables: Column[][] = [];

  constructor() {}

  ngOnInit(): void {
    const tablesFromStore = localStorage.getItem('tables');
    if (tablesFromStore !== null) {
      this.tables = JSON.parse(tablesFromStore);
    }
  }

  createTable(): void {
    // this.colsInputs.push({field: 'edit', header: 'Edit'});
    this.tables.push(this.colsInputs);
    localStorage.setItem('tables', JSON.stringify(this.tables));
    this.displayBasic=false;
  }

  createColumn(): void {
    this.colsInputs = [];
    for (let i = 0; i < this.columnCount; i++) {
      let obj = {field: '', header: ''};
      this.colsInputs.push(obj);
    }
  }

  deleteTable(e: number): void {
    this.tables.splice(e, 1);
    localStorage.setItem('tables', JSON.stringify(this.tables));
  }

  resetData(): void {
    this.columnCount = 0;
    this.colsInputs = [];
  }
}

export interface Column {
  field: string;
  header: string;
}
