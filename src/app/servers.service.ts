import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  serverInfo: any;

  constructor() { }
  servers = [{
    name: 'ProductionServer',
    id: 1,
    status: 'Online',

  }, {
    name: 'TestServer',
    id: 2,
    status: 'Offline'
  }, {
    name: 'DevServer',
    id: 3,
    status: 'Online',
  }]

  getServers() {
    return this.servers
  }

  getServer(id: number) {
    const server = this.servers.find((s) => {
      return s.id === id;
    })
    return server
  }


  updateServer(id: number, serverInfo:{ name?: string, status: string }) {
    const server = this.servers.find((s) => {
      return s.id === id;
    }
    );
    if (server) {
      server.name = this.serverInfo?.name;
      server.status = this.serverInfo?.status;
    }

  }

}
