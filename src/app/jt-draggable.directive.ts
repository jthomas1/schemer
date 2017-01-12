import { Directive } from '@angular/core';

@Directive({
  selector: '[jtDraggable]'
})
export class JtDraggableDirective {

  constructor(element: ElementRef) { }

}
