import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  //totalItems: number = 20;
  @Input() totalitemCon: number;
  className: string = "count";
  constructor() {}

  ngOnInit() {}
}
