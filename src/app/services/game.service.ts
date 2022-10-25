import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private juegos: Game[] = [];
  constructor(private http: HttpClient) {}

  getNominados() {
    if (this.juegos.length === 0) {
      console.log('desde internet');
      return this.http
        .get<Game[]>(`${environment.url}/api/goty`)
        .pipe(tap((resp) => (this.juegos = resp)));
    } else {
      console.log('desde caché');
      return of(this.juegos);
    }
  }

  votarJuego(id: string) {
    return this.http.post(`${environment.url}/api/goty/${id}`, {}).pipe(
      catchError((err) => {
        return of(err.error);
      })
    );
  }
}
