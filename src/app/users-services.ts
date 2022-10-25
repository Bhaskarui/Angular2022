import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
// activatedEmitter = new EventEmitter<boolean>();
activatedEmitter = new Subject<boolean>();
    activeUsers = ['Bhaskar', 'Max', 'Vikram'];
    inactiveUsers = ['Janu', 'Mokshitha', 'Mangli'];
    constructor(private counterService: CounterService) { }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.incrementInctiveToactive();
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incrementActiveToInactive();
    }




}