import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  @Input() totaltienCon: number;
  constructor() { }

  ngOnInit() {
  }

}
