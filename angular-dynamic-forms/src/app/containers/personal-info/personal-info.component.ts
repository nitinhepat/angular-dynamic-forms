import { Component, OnInit } from '@angular/core';
import { FieldModel } from 'src/app/models/field.model';
import { HttpClient } from '@angular/common/http';
import {map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { FormControlService } from 'src/app/services/form-control.service';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  fields: FieldModel[];
  personalInfoForm: FormGroup;
  constructor(private httpClient: HttpClient,
    private formControlService: FormControlService) { }

  ngOnInit() {
    this.getFields();
  }

  getFields(){
    this.httpClient.get('/assets/jsons/fields.json')
    .pipe(map((fields: FieldModel[])=>{
      return fields.map(field=>{
        return new FieldModel(field)
      })
    }))
    .subscribe((fields: any)=>{
      this.fields = fields;
      this.personalInfoForm = this.formControlService.getFormGroupObject(fields);
    });
  }



}
