import { ApiService } from './../../core/services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.css']
})
export class AllHeroesComponent implements OnInit {

  FakeData:any = [];
  dataSource:any;
  checked = false;

  @ViewChild(MatSort) sort: any;
  @ViewChild('nameH') nameH: any;
  @ViewChild('powersH') powersH: any;

  //use ApiService to get data
  constructor(private api:ApiService) { }

  ngOnInit(): void {

    // list data
    this.ListHeroes();
  }

  // table columns
  displayedColumns: string[] = ['HeroName', 'Powers', 'Rate'];

  // list all heroes from json file using api service
  ListHeroes(){
    this.api.ListHeroes().subscribe({
      next:(res:any)=>{
        this.FakeData = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
      }
    })
  }

  // it filters table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // checks on star to show rate
  checkStar(num:any,item:any){
    if(Math.round(num)>= item){
      return true;
    }
    return false;
  }

  // it sorts table by hero name or powers
  sortData(){
    if(this.checked == false){
      this.checked= true;
      this.powersH._elementRef.nativeElement.click()
    }else if(this.checked == true){
      this.checked= false;
      this.nameH._elementRef.nativeElement.click()
    }
  }
}
