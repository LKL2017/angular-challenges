import { Injectable, signal } from '@angular/core';
import { Teacher } from '../model/teacher.model';
import { randTeacher } from './fake-http.service';
import { Store } from './store';

@Injectable({
  providedIn: 'root',
})
export class TeacherStore extends Store<Teacher> {
  constructor() {
    super();
    this.items = signal([]);
  }

  override randItem() {
    return randTeacher();
  }
}
