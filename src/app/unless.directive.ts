import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vRef.createEmbeddedView(this.tempRef);
    } else {
      this.vRef.clear();
    }
  }
  constructor(private tempRef: TemplateRef<any>, private vRef: ViewContainerRef) { }

}
