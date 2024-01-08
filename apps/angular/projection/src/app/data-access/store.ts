import { WritableSignal } from '@angular/core';

export class Store<T extends { id: number }> {
  items!: WritableSignal<T[]>;

  constructor() {}

  randItem(): T {
    return {} as T;
  }

  addAll(items: T[]) {
    this.items.set(items);
  }

  addOne(item: T) {
    this.items.update((currentItems: T[]) => {
      return [...currentItems, item];
    });
  }

  deleteOne(id: number) {
    this.items.update((currentItems: T[]) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }
}
