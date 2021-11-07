import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularResizeElementModule } from 'angular-resize-element';
import {ChartModule} from 'primeng/chart';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ChipsModule} from 'primeng/chips';
import {ColorPickerModule} from 'primeng/colorpicker';
import {TableModule} from 'primeng/table';
import {InputNumberModule} from 'primeng/inputnumber';


import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { WorkspaceChartsComponent } from './workspaces/workspace-charts/workspace-charts.component';
import { WorkspaceTablesComponent } from './workspaces/workspace-tables/workspace-tables.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { TableComponent } from './charts/table/table.component';
import { WsPieComponent } from './workspaces/ws-pie/ws-pie.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    AboutComponent,
    WorkspaceChartsComponent,
    WorkspaceTablesComponent,
    LineChartComponent,
    TableComponent,
    WsPieComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularResizeElementModule,
    ChartModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ChipsModule,
    ColorPickerModule,
    TableModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
