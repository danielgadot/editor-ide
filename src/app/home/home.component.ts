import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: {children: [{children: [], name: 'second' ,id: 2}], name: 'first', id: 1};
  constructor() { }

  ngOnInit(): void {
  }

}
