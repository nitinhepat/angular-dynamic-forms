import { Injectable } from '@angular/core';
import { FieldModel } from '../models/field.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  getFormGroupObject(fields: FieldModel[]){
    let formGroup = {};
    fields.forEach(field=>{
      formGroup[field.id] = field.required 
        ? new FormControl(field.value,Validators.required)
        : new FormControl(field.value)
    });
    return new FormGroup(formGroup);
  }

}
