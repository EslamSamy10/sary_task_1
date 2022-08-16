import { PluginsService } from './../../core/services/plugins.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public plugin:PluginsService) { }

  ngOnInit(): void {
  }
  fixedSidebar(radio:any){
    radio.classList.toggle("switch");
    let layout:any =document.querySelector(".layout-content");
    layout.classList.toggle("resizable");

    let sidebar:any =document.querySelector(".sidebar-comp");
    sidebar.classList.toggle("sidebar-comp-fixed");
  }
}
