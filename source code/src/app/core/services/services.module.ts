import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { PluginsService } from './plugins.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  providers: [
    PluginsService,
    ApiService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServicesModule { }
