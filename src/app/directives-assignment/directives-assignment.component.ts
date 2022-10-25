import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent implements OnInit {
  showScrete = false;
  log:any = [];
  constructor() { }

  ngOnInit(): void {
  }

  onDetailsToggle() {
    this.showScrete = !this.showScrete
  }

  onToggle(){
    this.showScrete = !this.showScrete
    // this.log.push(this.log.length +1)
    this.log.push(new Date());
  }


}
