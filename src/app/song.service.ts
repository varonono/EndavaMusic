import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Song} from './Song';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'my-auth-token'} )
};

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  getSongs() {
    return this.http.get('/api/song');
  }
  getRock() {
    return this.http.get('/api/song/rock');
  }

  postSong(model: Song) {
    console.log('we got here');
    this.http.post('/api/add', model, httpOptions).subscribe(() => {}, error => {console.log(error); } );
  }

  private handleError(addHero: string, hero: any) {
    return undefined;
  }
}
