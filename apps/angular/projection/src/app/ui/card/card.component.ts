import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[card-list-item]',
  standalone: true,
})
export class CardListItemDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'app-card',
  template: `
    <div
      class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4"
      [class]="customClass">
      <ng-content select="img"></ng-content>

      <section>
        @for (item of list; track item.id) {
          <ng-container
            [ngTemplateOutlet]="cardListItem.templateRef"
            [ngTemplateOutletContext]="{ $implicit: item }"></ng-container>
        }
      </section>

      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="addNewItem()">
        Add
      </button>
    </div>
  `,
  standalone: true,
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent<T extends { id: number }> {
  @Input() list: T[] | null = null;
  @Input() customClass = '';
  @Output() add = new EventEmitter<void>();
  @ContentChild(CardListItemDirective) cardListItem!: CardListItemDirective;

  constructor() {}

  addNewItem() {
    this.add.emit();
  }
}
