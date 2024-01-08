import { Injectable, signal } from '@angular/core';
import { Student } from '../model/student.model';
import { randStudent } from './fake-http.service';
import { Store } from './store';

@Injectable({
  providedIn: 'root',
})
export class StudentStore extends Store<Student> {
  constructor() {
    super();
    this.items = signal([]);
  }

  override randItem() {
    return randStudent();
  }
}
