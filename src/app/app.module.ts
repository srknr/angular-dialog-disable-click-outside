import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports:      [ BrowserModule, MatDialogModule, BrowserAnimationsModule ],
  declarations: [ AppComponent,  DialogComponent ],
  bootstrap:    [ AppComponent ],
  exports: [MatDialogModule],
  entryComponents: [DialogComponent]
})
export class AppModule { }
