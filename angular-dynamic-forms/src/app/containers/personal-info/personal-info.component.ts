import { Component, OnInit } from '@angular/core';
import { FieldModel } from 'src/app/models/field.model';
import { HttpClient } from '@angular/common/http';
import {map } from 'rxjs/operators';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  fields: FieldModel[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  getFields(){
    this.httpClient.get('/assets/jsons/field.json')
    .pipe(map(field=>new FieldModel(field)))
    .subscribe((fields: any)=>{
      this.fields = fields;
    });
  }



}
