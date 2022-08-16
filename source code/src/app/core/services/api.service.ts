import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HandleErrorService } from './handle-error.service';
import { PluginsService } from './plugins.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private router:Router,private http: HttpClient,private handleError:HandleErrorService,private plugin:PluginsService) { }

  setHeader(){
    return { headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      }
  }
  ListHeroes(){
    return this.http.get('assets/fakeData.json',this.setHeader()).pipe(catchError(this.handleError.logError));
  }
}
