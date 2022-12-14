import { Component, OnInit } from '@angular/core';
import { GifsService } from './../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  public get historial() : string[] {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  getOptionHistorial(data: string) {
      this.gifsService.buscarGifs(data, 10);
  }

}
