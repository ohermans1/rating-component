import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.scss'],
})
export class ThankComponent implements OnInit {
  @Input() rating: any;

  constructor() {}

  ngOnInit(): void {}
}
