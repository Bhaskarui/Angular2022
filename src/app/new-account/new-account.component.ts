import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LogginService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LogginService]
})
export class NewAccountComponent implements OnInit {
  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();
  constructor(private loggingService:LogginService, private accService:AccountService) {
    this.accService.statusUpdated.subscribe((status:String)=>{
      alert('New Status:' + status);
    })
   }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // })
    // console.log('A Server Status is changed'+accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
    this.accService.addAccount(accountName,accountStatus);
  }

}
