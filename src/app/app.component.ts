import { Component } from '@angular/core';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import {Card} from './card'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [];
  onclick(firstname:HTMLInputElement,lastname:HTMLInputElement){
    console.log(firstname.value,lastname.value);
    const card = new Card(firstname.value,lastname.value,0)
    this.cards.push(card);
    firstname.value = '';
    lastname.value = '';
  }
}
