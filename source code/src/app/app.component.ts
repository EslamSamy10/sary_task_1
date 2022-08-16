import { PluginsService } from './core/services/plugins.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "sary_task_1";
  darkActive:boolean = false;
  currentLang:string;

  ngOnInit(): void {
    this.initMode()
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }
  constructor(private plugin:PluginsService,public translate:TranslateService){
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang)
  }

  initMode(){
    if (this.plugin.getData("dark") == true){
      this.darkActive=true;
      const body:any = document.querySelector("body");
      body.classList.toggle("dark");
    }
    if(this.plugin.getData("primaryColor") !=null)
      this.plugin.SetCssVar("--primary-color",this.plugin.getData("primaryColor"))
      this.plugin.SetCssVar("--sub-color",this.plugin.getData("subColor"))
    }
  darkModeToggle(){
    const body:any = document.querySelector("body");
    if(body.classList.contains("dark")){
      this.darkActive = false;
      this.plugin.setData(this.darkActive,"dark")
      body.classList.toggle("dark");
    }else{
      this.darkActive = true;
      this.plugin.setData(this.darkActive,"dark")
      body.classList.toggle("dark");
    }
  }
  changeColor(primColor:string,subColor:string){
    this.plugin.setData(primColor,"primaryColor");
    this.plugin.setData(subColor,"subColor");
    this.plugin.SetCssVar("--primary-color",primColor)
    this.plugin.SetCssVar("--sub-color",subColor)
  }
}
