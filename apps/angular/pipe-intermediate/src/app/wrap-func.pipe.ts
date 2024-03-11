import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapFn',
  standalone: true,
})
export class WrapFuncPipe implements PipeTransform {
  transform<F extends (...args: Parameters<F>) => R, R>(
    func: F,
    ...params: Parameters<F>
  ): R {
    return func(...params);
  }
}
