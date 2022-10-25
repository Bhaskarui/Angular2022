import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../users-services';

@Component({
  selector: 'app-user-obs-topic',
  templateUrl: './user-obs-topic.component.html',
  styleUrls: ['./user-obs-topic.component.css']
})
export class UserObsTopicComponent implements OnInit {
  id?: number;
  activatedSub?:Subscription
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

   
  }

onActivate(){
  this.userService.activatedEmitter.next(true);
}

}
