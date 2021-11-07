import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Column } from 'src/app/workspaces/workspace-tables/workspace-tables.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() colsInputs: Column[] = [];
  @Input() idx: number | any;
  @Output() deleteEmitter = new EventEmitter<number>();
  cols: Column[] = [];
  products: any = [];
  editing = false;

  constructor() {}

  ngOnInit(): void {
    this.cols = this.colsInputs;
  }

  handleDelete(): void {
    this.deleteEmitter.emit(this.idx);
  }
  addRow(): void {
    this.products.push({});
  }
  onRowEditInit(): void {
    this.editing= true;
  }
  onRowEditSave(e: any) {
    console.log(e);
    console.log(this.cols)
    this.editing= false;
    // this.products = [
    //   {ad: 'ramiz', yas: '3'},
    //   {ad: 'fariz', yas: '5'},
    // ]
    // if (product.price > 0) {
    //   delete this.clonedProducts[product.id];
    //   this.messageService.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'Product is updated',
    //   });
    // } else {
    //   this.messageService.add({
    //     severity: 'error',
    //     summary: 'Error',
    //     detail: 'Invalid Price',
    //   });
    // }
  }

  onRowEditCancel(product: any, index: number) {
    // this.products2[index] = this.clonedProducts[product.id];
    // delete this.products2[product.id];
    this.editing= false;
  }
}
