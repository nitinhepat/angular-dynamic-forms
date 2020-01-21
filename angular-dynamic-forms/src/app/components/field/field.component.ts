import { Component, OnInit, Input } from '@angular/core';
import { FieldModel } from 'src/app/models/field.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @Input() field: FieldModel;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.id].valid; }
  constructor() { }

  ngOnInit() {
  }

}
