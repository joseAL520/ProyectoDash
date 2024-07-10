import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/produc.interfaces';
 

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  public producList: Productos[] = [
    {
      "id": "1",
      "nombre": "Laptop X200",
      "marca": "TechBrand",
      "provedor": "Distribuidora A",
      "categoria": "Electrónica",
      "cantidad": 50
    },
    {
      "id": "2",
      "nombre": "Smartphone Z",
      "marca": "MobileCorp",
      "provedor": "Proveedor B",
      "categoria": "Electrónica",
      "cantidad": 120
    },
    {
      "id": "3",
      "nombre": "Silla Ergonómica",
      "marca": "ComfortSeating",
      "provedor": "Muebles Plus",
      "categoria": "Muebles",
      "cantidad": 30
    },
    {
      "id": "4",
      "nombre": "Monitor 4K",
      "marca": "ViewMax",
      "provedor": "Tech Distribuciones",
      "categoria": "Electrónica",
      "cantidad": 80
    },
    {
      "id": "5",
      "nombre": "Impresora Multifuncional",
      "marca": "PrintEase",
      "provedor": "OfficeSupplies",
      "categoria": "Oficina",
      "cantidad": 45
    },
    {
      "id": "6",
      "nombre": "Cafetera Automática",
      "marca": "BrewMaster",
      "provedor": "Gourmet Kitchen",
      "categoria": "Electrodomésticos",
      "cantidad": 25
    },
    {
      "id": "7",
      "nombre": "Mesa de Reunión",
      "marca": "OfficePro",
      "provedor": "Muebles Plus",
      "categoria": "Muebles",
      "cantidad": 15
    },
    {
      "id": "8",
      "nombre": "Cámara de Seguridad",
      "marca": "SecureCam",
      "provedor": "Tech Distribuciones",
      "categoria": "Seguridad",
      "cantidad": 70
    },
    {
      "id": "9",
      "nombre": "Altavoz Bluetooth",
      "marca": "SoundWave",
      "provedor": "MusicWorld",
      "categoria": "Electrónica",
      "cantidad": 90
    },
    {
      "id": "10",
      "nombre": "Router WiFi 6",
      "marca": "NetSpeed",
      "provedor": "Internet Solutions",
      "categoria": "Electrónica",
      "cantidad": 60
    }    
  ]


  getProductList(){
    // temporal hasta que la bsd este lista
    return  this.producList =  [
      {
        "id": "1",
        "nombre": "Laptop X200",
        "marca": "TechBrand",
        "provedor": "Distribuidora A",
        "categoria": "Electrónica",
        "cantidad": 50
      },
      {
        "id": "2",
        "nombre": "Smartphone Z",
        "marca": "MobileCorp",
        "provedor": "Proveedor B",
        "categoria": "Electrónica",
        "cantidad": 120
      },
      {
        "id": "3",
        "nombre": "Silla Ergonómica",
        "marca": "ComfortSeating",
        "provedor": "Muebles Plus",
        "categoria": "Muebles",
        "cantidad": 30
      },
      {
        "id": "4",
        "nombre": "Monitor 4K",
        "marca": "ViewMax",
        "provedor": "Tech Distribuciones",
        "categoria": "Electrónica",
        "cantidad": 80
      },
      {
        "id": "5",
        "nombre": "Impresora Multifuncional",
        "marca": "PrintEase",
        "provedor": "OfficeSupplies",
        "categoria": "Oficina",
        "cantidad": 45
      },
      {
        "id": "6",
        "nombre": "Cafetera Automática",
        "marca": "BrewMaster",
        "provedor": "Gourmet Kitchen",
        "categoria": "Electrodomésticos",
        "cantidad": 25
      },
      {
        "id": "7",
        "nombre": "Mesa de Reunión",
        "marca": "OfficePro",
        "provedor": "Muebles Plus",
        "categoria": "Muebles",
        "cantidad": 15
      },
      {
        "id": "8",
        "nombre": "Cámara de Seguridad",
        "marca": "SecureCam",
        "provedor": "Tech Distribuciones",
        "categoria": "Seguridad",
        "cantidad": 70
      },
      {
        "id": "9",
        "nombre": "Altavoz Bluetooth",
        "marca": "SoundWave",
        "provedor": "MusicWorld",
        "categoria": "Electrónica",
        "cantidad": 90
      },
      {
        "id": "10",
        "nombre": "Router WiFi 6",
        "marca": "NetSpeed",
        "provedor": "Internet Solutions",
        "categoria": "Electrónica",
        "cantidad": 60
      }
    ]
  }

  addProduct( character:  Productos ):void {
    const newProduc:  Productos = { fechaCreation: new Date() ,...character}
    this.producList.push(newProduc);
  }

  deleteProduct( id:string ){
    this.producList = this.producList.filter(
        pro=> pro.id !== id
    )
  }

  updateProduct(newProduct: Productos): void {
    const index = this.producList.findIndex(produ => produ.id === newProduct.id);
    if (index !== -1) {
      this.producList[index] = newProduct;
    }
  }

  searchProduct( nameProduct:string ){
    const productSearch = this.producList.filter(  produ => produ.nombre === nameProduct );
    if( productSearch.length !== 0 ){
      // this.userList[0] = userSearch
      this.producList = productSearch
    }else{
      this.getProductList();
    }
  }

}
