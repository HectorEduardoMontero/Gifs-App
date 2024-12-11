import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const ApiGifs_key = 'mH1EAssTjTRVtXNmRjN60kSibqS0HYzU';
const url = 'https://api.giphy.com/v1/gifs/search?';
const limit = 10;



@Injectable({providedIn: 'root'})
export class GifsService {


  private _tagsHistory: string[]=[];
  public gifList : Gif[] = [];


  constructor(private http:HttpClient ) {

   this.loadLocalStorage();
   }



    get tagsHistory(){
      return this._tagsHistory;
    }

    private organizeHistory(tag:string){
      tag = tag.toLowerCase();

      if(this._tagsHistory.includes(tag)){
        this._tagsHistory = this._tagsHistory.filter((oldtag)=> oldtag !== tag)
      }

      this._tagsHistory.unshift(tag);

      this._tagsHistory =this.tagsHistory.splice(0,10);
      this.saveLocalStorage();

    }
    private saveLocalStorage():void{
      localStorage.setItem('history', JSON.stringify (this._tagsHistory));
    }


    private loadLocalStorage():void{
      if(!localStorage.getItem('history')) return;
      this._tagsHistory =JSON.parse( localStorage.getItem('history')!);
        if (this._tagsHistory.length===0) return;

      this.searchTag(this._tagsHistory[0]);

    }

       searchTag(tag:string):void{
        if(tag.length===0) return ;

        this.organizeHistory(tag);
        const params = new HttpParams()
        .set('api_key',ApiGifs_key)
        .set('q',tag)
        .set('limit', '10');


        this.http.get<SearchResponse>(`${url}`,{params})
        .subscribe(resp => {

            this.gifList = resp.data;
            // Mostrar la lista de GIFs en consola

        });

      }



// this.http.get(`${url}${ApiGifs_key}&q=${tag}&limit=${limit}`)

 // const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ApiGifs_key}&q=valorant&limit=10`)
        // const data =await resp.json();
        // console.log(data);

        // fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ApiGifs_key}&q=valorant&limit=10`)
        // .then(resp => resp.json())
        // .then(data => console.log(data));


}
