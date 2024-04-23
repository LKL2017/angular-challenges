import { InjectionToken } from '@angular/core';

export const DEFAULT_TIMER = 1000;

export const TimerToken = new InjectionToken<number>('timer_value');
