import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./logging.service"
@Injectable()
export class AccountService {
    accounts = [{
        name: "MasterAccount",
        status: "active"
    }, {
        name: "TesterAccount",
        status: "inactive"
    }, {
        name: "MiddenAccount",
        status: "uncknown"
    }];
    statusUpdated = new EventEmitter<string>()

constructor(private loggingService:LogginService){

}
    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.logStatusChange(status)
    }

    updateAccount(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status)


    }
}

// export class Accounts {
//     name?:string
//     status?:string
// }