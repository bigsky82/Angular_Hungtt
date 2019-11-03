import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

import { product } from "../product";
@Component({
  selector: "app-body",
  templateUrl: "./body.component.html"
})
export class BodyComponent implements OnInit {
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onChangeProduct = new EventEmitter();
  @Output() sukienthaydoi = new EventEmitter();
  @Input() productCon: product;

  removeproduct(productid: number) {
    this.onRemoveProduct.emit(productid);
  }
  changQuatity(inputElement: HTMLInputElement, productid: number) {
    this.sukienthaydoi.emit({
      masanpham: productid,
      soluong: inputElement.value
    });
  }
  onchange(obj) {
    //console.log(obj);
    this.onChangeProduct.emit(obj);
  }
  constructor() {}

  ngOnInit() {}
}
