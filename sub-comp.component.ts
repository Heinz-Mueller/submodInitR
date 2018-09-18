import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-sub-comp',
  templateUrl: './sub-comp.component.html',
  styleUrls: ['./sub-comp.component.scss']
})
export class SubCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test(): void {
    console.log("TESTTTT");
  }

}
