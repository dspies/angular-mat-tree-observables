import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StorageContainerTreeComponent } from './storage-container-tree/storage-container-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTreeModule, MatButtonModule, MatIconModule ],
  declarations: [ AppComponent, HelloComponent, StorageContainerTreeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
