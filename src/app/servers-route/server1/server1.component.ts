import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from 'src/app/servers.service';

@Component({
  selector: 'app-server1',
  templateUrl: './server1.component.html',
  styleUrls: ['./server1.component.css']
})
export class Server1Component implements OnInit {
  servers?: { name: string; id: number; status: string; };
  constructor(private serverService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    const id = +this.activatedRoute.snapshot.params['id'];
    this.servers = this.serverService.getServer(id);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.servers = this.serverService.getServer(+params['id']);
    })
  }
  onEdit() {
    this.router.navigate(['edit'], {relativeTo:this.activatedRoute,queryParamsHandling:'preserve'})
  }
}
