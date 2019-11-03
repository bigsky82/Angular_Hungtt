import { Injectable } from "@angular/core";
import { product } from "../product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  products: product[] = [
    {
      id: 1,
      name: "mobile samsung",
      price: 1200000,
      descrpit: "day la dien thoai sam sung (Ngoc Trinh: 20 tuoi)",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwFuQYXR0pf3eVUSCJSdAW2Pa0S5UsiCqiuUyYM6uAnNZZRF4ig&s",
      quantity: 10
    },
    {
      id: 2,
      name: "mobile Iphone",
      price: 240000,
      descrpit: "day la dien thoai sam sung (Ngoc trinh 30 tuoi)",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJT2Q0c9m3ZvlRK9zBraNssk_8aCd1Iq-_uGFcGIlgMHSbYwnu&s",
      quantity: 20
    }
  ];
  findProducIndex(producid: number): number {
    const index = this.products.findIndex(pr => (pr.id = producid));
    return index;
  }
  removeProduct(producid: number): boolean {
    const index = this.findProducIndex(producid);
    const producname = this.products[index].name;
    if (index !== -1) {
      this.products.splice(index, 1);

      return true;
    }
    return false;
  }
  removeProduct_cach1(producid: number): boolean {
    const index = this.products.findIndex(pr => pr.id === producid);
    const producname = this.products[index].name;
    if (index !== -1) {
      this.products.splice(index, 1);

      // alert("Da xoa " + producname);
      return true;
    }
    return false;
  }

  changeQuatity(productid: number, quatity: number) {
    const product11 = this.products.find(pr => pr.id === productid);

    product11.quantity = quatity;
  }
}
