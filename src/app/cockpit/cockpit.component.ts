import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName: any = '';
  newServerContent: any = '';
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('serverContentInput') serverContentInput?:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServers(nameInput:HTMLInputElement) {
    console.log(nameInput.value);
    this.serverCreated.emit({ serverName: nameInput.value, 
      serverContent:this.serverContentInput?.nativeElement.value})
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
  }
  onAddServersBluePrint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({ serverName:nameInput.value, 
      serverContent: this.serverContentInput?.nativeElement.value})
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
  }

}
