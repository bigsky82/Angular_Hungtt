import { Component, Input, DoCheck, OnInit } from "@angular/core";

import { from } from "rxjs";
import { product } from "./product";
import { ProductService } from "./services/product.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, DoCheck {
  title = "shopping-cart";
  //@Input() totalItems: number;
  totalItemsCha: number = 0;
  totalTienCha: number = 0;
  productCha: product[];
  // productCha: product[] = [
  //   {
  //     id: 1,
  //     name: "mobile samsung",
  //     price: 1200000,
  //     descrpit: "day la dien thoai sam sung (Ngoc Trinh: 20 tuoi)",
  //     img:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwFuQYXR0pf3eVUSCJSdAW2Pa0S5UsiCqiuUyYM6uAnNZZRF4ig&s",
  //     quantity: 10
  //   },
  //   {
  //     id: 2,
  //     name: "mobile Iphone",
  //     price: 240000,
  //     descrpit: "day la dien thoai sam sung (Ngoc trinh 30 tuoi)",
  //     img:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJT2Q0c9m3ZvlRK9zBraNssk_8aCd1Iq-_uGFcGIlgMHSbYwnu&s",
  //     quantity: 20
  //   }
  // ];
  constructor(public pdoducservice: ProductService) {}

  ngOnInit() {
    this.productCha = this.pdoducservice.products;
  }
  ngDoCheck() {
    let total: number = 0;
    let totaltien: number = 0;
    for (const pro of this.productCha) {
      total += Number(pro.quantity);
      totaltien += Number(pro.price * pro.quantity);
    }
    this.totalItemsCha = total;
    this.totalTienCha = totaltien;
  }
  removeProduct(productid: number) {
    //Cach 1
    // //alert('Da check ' + productid);
    // const index = this.productCha.findIndex(pr => pr.id == productid);
    // const producname = this.productCha[index].name;
    // if (index !== -1) {
    //   this.productCha.splice(index, 1);
    //   alert("Da xoa " + producname);
    // }

    //Cach 2
    // const index = this.productCha.findIndex(pr => pr.id === productid);
    // const producname = this.productCha[index].name;
    // const isremove = this.pdoducservice.removeProduct(productid);
    // if (isremove) {
    //   alert("Ban da xoa san pham: " + producname);
    // }
    //Cach 3
    const index = this.pdoducservice.findProducIndex(productid);
    const producname = this.productCha[index].name;
    const isremove = this.pdoducservice.removeProduct(productid);
    if (isremove) {
      alert("Ban da xoa san pham: " + producname);
    }
  }
  onChangeProduct(productid: number, productname: string) {
    alert("Da thay doi " + productid + "san pham:" + productname);
  }
  sukienthaydoi(obj: { masanpham: number; soluong: number }) {
    /*console.log(
      "Da lay duoc ma san pham: " + obj.masanpham + ", so luong: " + obj.soluong
    );*/

    // const product11 = this.productCha.find(pr => pr.id === obj.masanpham);
    // product11.quantity = obj.soluong;

    // let total: number = 0;
    // let totaltien: number=0;
    // for (const pro of this.productCha) {
    //   total += Number(pro.quantity);
    //   totaltien+=Number(pro.price*pro.quantity)
    // }
    // this.totalItemsCha = total;
    // this.totalTienCha=totaltien;

    this.pdoducservice.changeQuatity(obj.masanpham, obj.soluong);
  }

  //Thay doi tong so luong san pham o componet hearder
  /*getcount() {
    var total: number = 0;
    for (let index = 0; index < this.productCha.length; index++) {
      total += Number(this.productCha[index].quantity);
    }

    return total;
  }*/
  getcount() {
    let total: number = 0;
    for (const pro of this.productCha) {
      total += Number(pro.quantity);
    }

    return total;
  }
}
