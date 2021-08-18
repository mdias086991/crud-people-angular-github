import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('cardInformationImportant') cardInformationImportant: string = "";
  @Input('cardDescription') cardDescription: string = "";
  @Input('colorCard') colorCard: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
