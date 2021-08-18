import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input('label') label: string = "";
  @Input('color') color: string = "";
  @Input('type') type: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
