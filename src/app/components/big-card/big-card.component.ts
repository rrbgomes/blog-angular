import { Component, Input, OnInit } from '@angular/core';
import {dataFake} from '../../data/dataFake'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  id:string = "";
  photoCover:string = "";
  cardTitle:string = "";
  cadrDescription:string = "";


  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setValuesComponent(this.id);
  }

  setValuesComponent(id:string){
    const result = dataFake.filter(article => article.id==id)[0];
    this.cardTitle = result.title;
    this.photoCover = result.photo;
    this.cadrDescription = result.description;

  }

}
