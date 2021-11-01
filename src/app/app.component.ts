import { Component } from '@angular/core';
// import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // public readonly AngularResizeElementDirection = AngularResizeElementDirection;
  // public data: any = {};
  title = 'dashboard';

  // public onResize(evt: AngularResizeElementEvent): void {
  //       this.data.width = evt.currentWidthValue;
  //       this.data.height = evt.currentHeightValue;
  //       this.data.top = evt.currentTopValue;
  //       this.data.left = evt.currentLeftValue;
  // }
}
