import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element?: {
    type: string,
    name: string,
    content: string
  }
  @Input() name?: string;
  @ViewChild('heading', {static:true}) header?: ElementRef;
  @ContentChild('contentParagraph') para?: ElementRef;
  constructor() {
    console.log('constructor is called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges is called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInIt is called!');
    console.log('Text Content:'+ this.header?.nativeElement.textContent);
    console.log('Text Content of paragraph:' + this.para?.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDocheck is called!')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContent is called!');
    console.log('Text Content of paragraph:' + this.para?.nativeElement.textContent);

  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInt is called!')
  }
  
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called!');
    console.log('Text Content:'+ this.header?.nativeElement.textContent);
  } 
  
  ngOnDestroy(): void {
    console.log('ngDestroy is called!')
  }
}
