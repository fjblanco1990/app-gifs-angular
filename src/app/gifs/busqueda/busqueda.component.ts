import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from './../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txt_buscar!: ElementRef<HTMLInputElement>; //hace referencia al campo en el html sin necesida de un form
  @ViewChild('txtCantidad') txt_cantidad!: ElementRef<HTMLInputElement>; //hace referencia al campo en el html sin necesida de un form

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  buscar() {
    const text_ingresado = this.txt_buscar.nativeElement.value;
    const text_cantidad = this.txt_cantidad.nativeElement.value;
    if (text_ingresado.trim().length !== 0) {
       this.gifsService.buscarGifs(text_ingresado, +text_cantidad);
       this.txt_buscar.nativeElement.value = '';

    }
  }
}
