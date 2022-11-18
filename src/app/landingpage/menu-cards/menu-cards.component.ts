import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-cards',
  templateUrl: './menu-cards.component.html',
  styleUrls: ['./menu-cards.component.css']
})
export class MenuCardsComponent implements OnInit {

  constructor() { }
  price:number=7.49 
  ngOnInit(): void {
  }

}
