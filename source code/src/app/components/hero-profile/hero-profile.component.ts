import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit {
  name:string = 'Eslam Samy';
  Description:string = 'Moving Things Throw HTTP, & The director of the World Wide Web Consortium (W3C)'
  Powers:string = 'Moving Things Throw HTTP, & The director of the World Wide Web Consortium (W3C)'
  constructor() { }

  ngOnInit(): void {
  }

}
