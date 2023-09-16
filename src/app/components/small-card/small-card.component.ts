import { Component, Input, OnInit } from '@angular/core';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  id: string="";
  photoCover: string = "";
  cardTitle: string = "";

  constructor() { }

  ngOnInit(): void {
    this.setValuesComponent(this.id);
  }

  setValuesComponent(id:string | null){
    const result = dataFake.filter(article => article.id==id)[0];
    this.cardTitle = result.title;
    this.photoCover = result.photo;

    console.log(result);
  }


}
