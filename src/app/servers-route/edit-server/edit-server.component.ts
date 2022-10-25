import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from 'src/app/servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server?: { name?: string | undefined; id: number | undefined | null; status?: string | undefined; };
  serverName?: string = '';
  serverStatus?: string = '';
  allowEdit = false;
  changesSaved = false;
  constructor(private serverService: ServersService, 
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.queryParams);
    console.log(this.activatedRoute.snapshot.fragment);
    this.activatedRoute.queryParams.subscribe(
      (queryparams: Params) => {
        console.log(queryparams);
        this.allowEdit = queryparams['allowEdit'] == 1 ? true : false;
      }
    );
    this.activatedRoute.fragment.subscribe();
    const id = +this.activatedRoute.snapshot.params['id']
    this.server = this.serverService.getServer(id);
    // subscribe route params to update id if the params change
    this.serverName = this.server?.name;
    this.serverStatus = this.server?.status;

  }

  onupdateServer() {
    // this.serverService.updateServer(this.server?.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo:this.activatedRoute, queryParamsHandling:'preserve'})
  }

}
