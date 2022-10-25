import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingradients } from '../shared/ingradients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingradients: Ingradients[] = [];
  private igChangedSub?: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingradients = this.slService.getIngradients();
    this.igChangedSub = this.slService.ingradientChanged.subscribe((ingredient: Ingradients[]) => {
      this.ingradients = ingredient
    });
  }

  ngOnDestroy(): void {
    this.igChangedSub?.unsubscribe();
  }
  // onIngradientAdded(ingdrient: Ingradients) {
  //   this.ingradients.push(ingdrient);
  // }


  onEdit(index: number) {
    this.slService.startEditing.next(index)
  }
}
