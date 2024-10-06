import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HexagonMapModule } from './hexagon-map/hexagon-map.module';

@NgModule({
  imports: [
    BrowserModule,
    HexagonMapModule
  ],
  providers: []
})
export class AppModule { }
