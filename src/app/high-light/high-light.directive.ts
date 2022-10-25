import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
selector:'[appHighlightDirective]'
})

export class HighLightDirective implements OnInit {
constructor(private elementRef:ElementRef){}
ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
}


}