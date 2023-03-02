import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: MainComponent }]),
    IonicModule.forRoot({
      mode: 'md',
    }),
  ],
  declarations: [AppComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
