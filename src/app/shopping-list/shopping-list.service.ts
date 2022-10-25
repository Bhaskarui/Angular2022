import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingradients } from '../shared/ingradients.model';

@Injectable()
export class ShoppingListService {
  getIngradient(index: number): number {
    throw new Error('Method not implemented.');
  }
  // ingradientChanged = new EventEmitter<Ingradients[]>();
  ingradientChanged = new Subject<Ingradients[]>();
  startEditing = new Subject<number>();
  constructor() { }

  ingradients: Ingradients[] = [
    new Ingradients('Apple', 20),
    new Ingradients('orange', 10)
  ];


  getIngradients() {
    return this.ingradients.slice();
  }

  getIngredient(index: number) {
    return this.ingradients[index];
  }

  addIngradient(ingre: Ingradients) {
    this.ingradients.push(ingre);
    // this.ingradientChanged.emit(this.ingradients.slice()); EventEmitter
    this.ingradientChanged.next(this.ingradients.slice());
  }

  addIngradients(ingradients: Ingradients[]) {
    // for (let ingradient of ingradients) {
    //   this.addIngradient(ingradient);
    // }

    this.ingradients.push(...ingradients);
    // this.ingradientChanged.emit(this.ingradients.slice()); EventEmitter
    this.ingradientChanged.next(this.ingradients.slice());
  }

  updateIngredient(index:number, newIngredient:Ingradients){
    this.ingradients[index] = newIngredient;
    this.ingradientChanged.next(this.ingradients.slice());
  }

  deleteIngredient(index:number){
    this.ingradients.splice(index,1);
    this.ingradientChanged.next(this.ingradients.slice());
  }
}
