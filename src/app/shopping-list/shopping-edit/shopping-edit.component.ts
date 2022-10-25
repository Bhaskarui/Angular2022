import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingradients } from 'src/app/shared/ingradients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', { static: false }) nameInputRef?: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInputRef?: ElementRef;

  // @Output() ingradientAdded = new EventEmitter<Ingradients>();
  subscription?: Subscription;
  editMode = false;
  editedItemIndex!: number;
  @ViewChild('f') slForm?: NgForm;
  editedItem?: Ingradients;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.slService.getIngredient(index);
      this.slForm?.setValue({
        name: this.editedItem?.name,
        amount: this.editedItem?.amount
      });
    })
  }

  onSubmit(form: NgForm) {
    // const ingName = this.nameInputRef?.nativeElement.value;
    // const ingAmount = this.amountInputRef?.nativeElement.value;
    const value = form.value;
    const newIngradient = new Ingradients(value.name, value.amount);
    // this.ingradientAdded.emit(newIngradient);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngradient)
    } else {
      this.slService.addIngradient(newIngradient)
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm?.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex)
    this.onClear();
  }

}
