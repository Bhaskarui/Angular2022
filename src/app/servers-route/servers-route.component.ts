import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers-route',
  templateUrl: './servers-route.component.html',
  styleUrls: ['./servers-route.component.css']
})
export class ServersRouteComponent implements OnInit {
  servers: { name: string; id: number; status: string; }[] = []
  constructor(private serverService: ServersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.servers = this.serverService.getServers()
  }

  onReload() {
    this.router.navigate(['/servers'], { relativeTo: this.activatedRoute })
  }
}
