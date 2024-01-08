import { Component, computed, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import {
  CardComponent,
  CardListItemDirective,
} from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-teacher-card',
  template: `
    <app-card [list]="teachers()" (add)="addItem()" customClass="bg-red-200/50">
      <img src="assets/img/teacher.png" alt="" width="200px" />
      <ng-template let-teacher card-list-item>
        <app-list-item (delete)="deleteItem(teacher.id)">
          {{ teacher.firstName }}
        </app-list-item>
      </ng-template>
    </app-card>
  `,
  standalone: true,
  imports: [CardComponent, ListItemComponent, CardListItemDirective],
})
export class TeacherCardComponent implements OnInit {
  teachers = computed(() => this.store.items());

  constructor(
    private http: FakeHttpService,
    private store: TeacherStore,
  ) {}

  ngOnInit(): void {
    this.http.fetchTeachers$.subscribe((t) => this.store.addAll(t));
  }

  addItem() {
    this.store.addOne(this.store.randItem());
  }

  deleteItem(id: number) {
    this.store.deleteOne(id);
  }
}
