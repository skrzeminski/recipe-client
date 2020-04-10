import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {
  ingredientForm;

  constructor() {
  }

  ngOnInit() {
    let name = '';
    let amount = '';
    this.ingredientForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      amount: new FormControl(amount, Validators.required)
    });
  }

}
