import { Component, computed, OnInit } from '@angular/core';
import { CityStore } from '../../data-access/city.store';
import { FakeHttpService } from '../../data-access/fake-http.service';
import {
  CardComponent,
  CardListItemDirective,
} from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-city-card',
  template: `
    <app-card
      [list]="cities()"
      (add)="addItem()"
      customClass="bg-indigo-200/50">
      <img src="assets/img/city.png" alt="" width="200px" />
      <ng-template let-city card-list-item>
        <app-list-item (delete)="deleteItem(city.id)">
          {{ city.country }}
        </app-list-item>
      </ng-template>
    </app-card>
  `,
  standalone: true,
  imports: [CardComponent, ListItemComponent, CardListItemDirective],
})
export class CityCardComponent implements OnInit {
  cities = computed(() => this.store.items());

  constructor(
    private http: FakeHttpService,
    private store: CityStore,
  ) {}

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((cities) => this.store.addAll(cities));
  }

  addItem() {
    this.store.addOne(this.store.randItem());
  }

  deleteItem(id: number) {
    this.store.deleteOne(id);
  }
}
