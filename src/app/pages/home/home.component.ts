import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  bigCardArticles: any[] = dataFake.filter(article => article.bigCard=="1");
  smallCardArticles: any[] = dataFake.filter(article => article.bigCard=="0");

  ngOnInit(): void {

  }

}
