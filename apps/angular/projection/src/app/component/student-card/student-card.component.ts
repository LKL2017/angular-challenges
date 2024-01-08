import { Component, computed, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { StudentStore } from '../../data-access/student.store';
import {
  CardComponent,
  CardListItemDirective,
} from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-student-card',
  template: `
    <app-card
      [list]="students()"
      (add)="addItem()"
      customClass="bg-green-200/50">
      <img src="assets/img/student.webp" alt="" width="200px" />
      <ng-template let-student card-list-item>
        <app-list-item (delete)="deleteItem(student.id)">
          {{ student.firstName }}
        </app-list-item>
      </ng-template>
    </app-card>
  `,
  standalone: true,
  imports: [CardComponent, ListItemComponent, CardListItemDirective],
})
export class StudentCardComponent implements OnInit {
  students = computed(() => this.store.items());

  constructor(
    private http: FakeHttpService,
    private store: StudentStore,
  ) {}

  ngOnInit(): void {
    this.http.fetchStudents$.subscribe((s) => this.store.addAll(s));
  }

  addItem() {
    this.store.addOne(this.store.randItem());
  }

  deleteItem(id: number) {
    this.store.deleteOne(id);
  }
}
