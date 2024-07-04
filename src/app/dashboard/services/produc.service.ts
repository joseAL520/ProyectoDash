import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/produc.interfaces';
import { v4 as uuidv4  } from 'uuid'; 

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
    },
    {
      "id": "11",
      "nombre": "Lámpara de Escritorio LED",
      "marca": "BrightLight",
      "provedor": "Home Decor",
      "categoria": "Iluminación",
      "cantidad": 100
    },
    {
      "id": "12",
      "nombre": "Teclado Mecánico",
      "marca": "TypeMaster",
      "provedor": "Tech Distribuciones",
      "categoria": "Accesorios",
      "cantidad": 110
    },
    {
      "id": "13",
      "nombre": "Ventilador de Torre",
      "marca": "CoolBreeze",
      "provedor": "Climate Control",
      "categoria": "Electrodomésticos",
      "cantidad": 35
    },
    {
      "id": "14",
      "nombre": "Disco Duro Externo",
      "marca": "StoragePro",
      "provedor": "Tech Distribuciones",
      "categoria": "Almacenamiento",
      "cantidad": 200
    },
    {
      "id": "15",
      "nombre": "Auriculares Inalámbricos",
      "marca": "SoundWave",
      "provedor": "MusicWorld",
      "categoria": "Electrónica",
      "cantidad": 150
    },
    {
      "id": "16",
      "nombre": "Horno de Microondas",
      "marca": "QuickHeat",
      "provedor": "Gourmet Kitchen",
      "categoria": "Electrodomésticos",
      "cantidad": 40
    },
    {
      "id": "17",
      "nombre": "Sofá de 3 Plazas",
      "marca": "ComfortLiving",
      "provedor": "Muebles Plus",
      "categoria": "Muebles",
      "cantidad": 20
    },
    {
      "id": "18",
      "nombre": "Tablet 10 pulgadas",
      "marca": "TechBrand",
      "provedor": "Distribuidora A",
      "categoria": "Electrónica",
      "cantidad": 75
    },
    {
      "id": "19",
      "nombre": "Purificador de Aire",
      "marca": "AirClean",
      "provedor": "Healthy Home",
      "categoria": "Electrodomésticos",
      "cantidad": 55
    },
    {
      "id": "20",
      "nombre": "Proyector Portátil",
      "marca": "VisionCast",
      "provedor": "Tech Distribuciones",
      "categoria": "Electrónica",
      "cantidad": 65
    }
    
  ]

  
  addProduct( character:  Productos ):void {
    const newProduc:  Productos = {id: uuidv4() ,...character}
    console.log(newProduc)
    this.producList.push(newProduc);
  }


  deleteProduct( id:string ){
    this.producList = this.producList.filter(
        pro=> pro.id !== id
    )
  }

}
