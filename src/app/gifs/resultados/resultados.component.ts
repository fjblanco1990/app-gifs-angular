import { Component, OnInit } from '@angular/core';
import { GifsService } from './../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  public gif_url!: string;
  public title_gif!: string;
  public optionEnd: string = '';
  public _historial: string[] = [];
  get response() {
    return this.gifsService.response_gifs;
  }
  
  constructor(private gifsService: GifsService) {
  
   }

  ngOnInit(): void {
  }

  openModal(url: string, title: string){
    this.gif_url = url;
    this.title_gif = title;
  }

}
