import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  prueba1: any = [];
  prueba2: any = [];
  prueba4: any = [];



  ngOnInit() {
    this.dropdownList = [
      {'id': 1, 'itemName': 'India'},
      {'id': 2, 'itemName': 'Singapore'},
      {'id': 3, 'itemName': 'Australia'},
      {'id': 4, 'itemName': 'Canada'},
      {'id': 5, 'itemName': 'South Korea'},
      {'id': 6, 'itemName': 'Germany'},
      {'id': 7, 'itemName': 'France'},
      {'id': 8, 'itemName': 'Russia'},
      {'id': 9, 'itemName': 'Italy'},
      {'id': 10, 'itemName': 'Sweden'}
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Countries',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };
    this.campturar();
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);

    for (let i = 0; i < this.selectedItems.length; i++) {
      console.log(this.selectedItems[i].id);
      if (item.id === this.selectedItems[i].id){
        this.prueba1.push({'id': this.selectedItems[i].id});
      } else {
        console.log("son Diferentes");
      }
      console.log("este valor",this.prueba1);
    }

    //console.log("Sin repetidos es:", this.prueba4);
    //this.DatosPuntoFecha(this.prueba4);
  }
  OnItemDeSelect(item: any,id: any) {
    console.log("Llegada item",item);
    console.log("prueba este",this.selectedItems);

    for (let i = 0; i < this.prueba1.length; i++) {
      let index;
      if (parseInt(item.id, 0) === parseInt(this.prueba1[i].id, 0)) {
        index = this.prueba1.indexOf(this.prueba1[i]);
        this.prueba1.splice(index, 1);
      }
      console.log("imprime", this.prueba1);
    }
    //this.DatosPuntoFecha(this.prueba4)
  }

  onSelectAll({'di': items}: any) {
    console.log(items);
    for (let i = 0; i < this.selectedItems.length; i++) {

        console.log(this.selectedItems[i].id);
        if(this.selectedItems[i].id === this.prueba1.id){
          const sinRepetidos = this.prueba1.filter((valorActual, indiceActual, arreglo) => {
            //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
            return arreglo.findIndex(
              valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)
            ) === indiceActual
          });
          console.log("array sin repetidos", sinRepetidos);
        }else{
          this.prueba1.push({'id': this.selectedItems[i].id});
          console.log("entro aca");
        }
      }
    }

  onDeSelectAll(items: any) {
    console.log(items);
    this.prueba1.splice(0, this.prueba1.length);
  }

  campturar() {
    if (this.selectedItems.some(inv => inv.id === ' 1 ')) {
      const valores = this.selectedItems.map(inv => inv.id);
      console.log(valores);
    }
  }

}



