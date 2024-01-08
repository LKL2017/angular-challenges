import { Injectable, signal } from '@angular/core';
import { City } from '../model/city.model';
import { randomCity } from './fake-http.service';
import { Store } from './store';

@Injectable({
  providedIn: 'root',
})
export class CityStore extends Store<City> {
  constructor() {
    super();
    this.items = signal([]);
  }

  override randItem() {
    return randomCity();
  }
}
