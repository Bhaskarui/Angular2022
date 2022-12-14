import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  public serverId: number = 10;
  public serverStatus: string = 'Offline';
  constructor() { }

  ngOnInit(): void {
    this.serverStatus = Math.random()>0.5? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
   return this.serverStatus === 'Online' ? 'green' : 'red';
  }
  
}
