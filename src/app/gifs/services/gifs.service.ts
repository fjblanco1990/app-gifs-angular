import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataGif, SearchGIFResponse } from './../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = '07AUMAk1T7Ie8PmZfQHg0uA9BwRH8VY6';
  private url: string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = [];

  public response_gifs: DataGif[] = [];

  public get historial() : string[] {
    return [...this._historial]; //obtiene los item del array creando uno nuevo operador expret
  }


  constructor(private http: HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.response_gifs = JSON.parse(localStorage.getItem('resultados')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
 
    // }
  }

  buscarGifs(query:string, quantity: number) {
 
    query  = query.trim().toLocaleLowerCase();//quito los espacios con trim y lo convieto a lowercase
    if (!this._historial.includes(query)) { // valida que si no existe no lo agregue
        this._historial.unshift(query);// inserta los valores a un array al incio
        this._historial = this._historial.splice(0,10);
        localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('q', query)
    .set('limit', quantity);

    //esto se llama interpolacion de string ${}
    this.http.get<SearchGIFResponse>(`${this.url}/search`, { params } )
    .subscribe(
        (response) => {
         this.response_gifs = response.data;      
         localStorage.setItem('resultados', JSON.stringify(this.response_gifs));
        }
    );
    this._historial =  this._historial.splice(0,10); //corta el historial solo hasta 10

  }

}
