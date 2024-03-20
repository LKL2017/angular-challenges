import { inject, InjectionToken, InjectOptions, Signal } from '@angular/core';

export type ButtonState = 'enabled' | 'disabled';

export interface ButtonSignalState {
  state: Signal<ButtonState>;
}

export const BUTTON_STATE = new InjectionToken<ButtonSignalState>(
  'Button State',
);

export const injectButtonState = (options: InjectOptions) => {
  return inject(BUTTON_STATE, options);
};
