import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  constructor(
    public dialog: MatDialog
  ){}

  openDialog(){
   const dialogRef = this.dialog.open(DialogComponent, {
     width: '300px',
     height: '200px',
     disableClose: true
   });
  }
}
