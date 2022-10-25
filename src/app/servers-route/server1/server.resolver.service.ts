import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "src/app/servers.service";
interface Server {
id:number;
name:string;
status:string;
}

export class serverResolver implements Resolve<{name:string, id:number, status:string}> {
    constructor(private serverService:ServersService){

    }
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Server> | Promise<Server> | any {
    
}
}