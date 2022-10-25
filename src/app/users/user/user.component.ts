import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
user!:{id?:number | undefined, name?:string | undefined};
paramsSubscroption?:Subscription;
  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id:this.activedRoute?.snapshot?.params['id'],
      name: this.activedRoute?.snapshot?.params['name']
    }
    this.paramsSubscroption = this.activedRoute.params.subscribe((params:Params) =>{
      this.user.id = params['id'];
      this.user.name = params['name'];
    })
  }

  ngOnDestroy(): void {
    this.paramsSubscroption?.unsubscribe();
  }

}
