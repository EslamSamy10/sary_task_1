import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  constructor() { }

  GetCssVar(variable:string) {
    let r:any = document.querySelector(':root');
    let rs = getComputedStyle(r);
    return rs.getPropertyValue(variable)
  }
  SetCssVar(variable:string,value:string) {
    let r:any = document.querySelector(':root');
    r.style.setProperty(variable, value);
  }
  setData(data:any,name:string) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem(name, jsonData)
  }
  getData(name:string) {
    let n:any = localStorage.getItem(name);
      return JSON.parse(n);
  }
}
