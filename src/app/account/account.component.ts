import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LogginService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogginService]
})
export class AccountComponent implements OnInit {
  @Input() account?: { name: string, status: string };
  @Input() id!: number;
  // @Output() statusChanged = new EventEmitter<{ id: number, status: string }>()
  constructor(private loggingService: LogginService, private accService: AccountService) { }

  ngOnInit(): void {
  }

  onSelect(status: string) {
    // this.statusChanged.emit({ id:this.id, newStatus: status});
    console.log(status);
    this.accService.updateAccount(this.id, status);
    // this.loggingService.logStatusChange(status)
    this.accService.statusUpdated.emit(status)
  }

}
