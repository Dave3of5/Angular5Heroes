import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private baseServer: string = "http://my-json-server.typicode.com/Dave3of5/my-json-db/";
  //http://my-json-server.typicode.com/Dave3of5/my-json-db/heroes/

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(`${this.baseServer}/heroes`);
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(`${this.baseServer}/heroes/${id}`);
  }

}
