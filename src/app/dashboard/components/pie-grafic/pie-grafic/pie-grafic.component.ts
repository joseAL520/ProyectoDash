import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ProductServicesService } from '../../../services/produc.service';
import { map, tap } from 'rxjs';
import { CodeProdut } from '../../../interfaces/codes-interfaces/categoryProductsCode.interfaces';

Chart.register(...registerables);

@Component({
  selector: 'app-pie-grafic',
  templateUrl: './pie-grafic.component.html',
  styleUrl: './pie-grafic.component.css'
})
export class PieGraficComponent implements OnInit {
  

  chartPie: any
  public productCategory: string[] =[];
  public values:string[]=[]
  public data: number[] = [];
  public label: string[] = [];
  
  constructor(
    private srvProduct: ProductServicesService
  ){}

  coloGenerator(){
    const colores: string[] = [];
    // Define los rangos para los tonos de azul
    const minBlue = 127; // Valor mínimo para azul (pastel)
    const maxBlue = 255; // Valor máximo para azul (oscuro)

    this.productCategory.forEach(() => {
      const b = Math.floor(Math.random() * (maxBlue - minBlue + 1)) + minBlue;
      const r = Math.floor(Math.random() * 100); // Rango: 0 a 100
      const g = Math.floor(Math.random() * 100); // Rango: 0 a 100
      
      const color = `rgb(${r}, ${g}, ${b})`;
      colores.push(color);
    });
    return colores;
  }
  


  getProductValue(){
      this.srvProduct.getProductList().pipe(
        map( value => value.map(  product => ({
          categoria: this.categoryName(product.categoria),
          cantidad: product.cantidad
        }))),
        tap( rel => this.updatePieDiagram(rel))
      ).subscribe()
  }

  // filtra el codigo y lo vuelve el nombre
  categoryName(code:string){
    const codigoName = CodeProdut[code];
    this.unicValue(codigoName);
    return codigoName;
  }

  // elimina los valores repetidos
  unicValue(name:string){
    this.values.push(name);
    const valoresUnicos = [...new Set(this.values)];
    return this.productCategory = valoresUnicos;
  }


  updatePieDiagram( data:{ cantidad:number , categoria:string }[] ){
    
    // Crear un objeto para agrupar las cantidades por categoria
    const CodeProdut$: { [key: string]: number } = {};

     data.forEach( item => {
      if( CodeProdut$[item.categoria] ){
        CodeProdut$[item.categoria] += item.cantidad;
      }else{
        CodeProdut$[item.categoria] = item.cantidad;
      }
    });

    //filtrar y ordenar las categoria segun 
    const filterCatego = this.productCategory.filter( categ => CodeProdut$[categ] !== undefined);
    const filterData =  filterCatego.map( categ => CodeProdut$[categ]);
    
    this.label = filterCatego
    this.data = filterData

    this.createPiegrafic();

  }

  createPiegrafic(){

    this.chartPie = new Chart('MyChart', {
      type: 'doughnut',
      data: {
        labels: this.label,
        datasets: [
        {
          label:'cantidad',
          data: this.data,
          backgroundColor: this.coloGenerator(),

        },
      ]
    }});

  }

  ngOnInit(): void {
    this.getProductValue();
  }

}
