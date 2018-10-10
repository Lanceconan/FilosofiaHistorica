import { Component, OnInit } from '@angular/core';

export interface quote{
  quote:string;
  author:string;
}

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  public quote:quote;
  public quotes:quote[] = [
    {quote: 'La cosa más difícil es conocernos a nosotros mismos; la más fácil es hablar mal de los demás.', author: 'Tales de Mileto'},
    {quote: 'No puedo enseñar nada a nadie. Solo puedo hacerles pensar.', author: 'Sócrates'},
    {quote: 'No juzgamos a las personas que amamos', author: 'Jean-Paul Sartre'},
    {quote: 'El conocimiento es poder', author: 'Francis Bacon'},
    {quote: 'No juzgamos a las personas que amamos', author: 'Jean-Paul Sartre'},
    {quote: 'El amor inmaduro dice: “te amo porque te necesito”. El maduro dice: “te necesito porque te amo”', author: 'Erich Fromm'},
    {quote: 'La peor lucha es la que no se hace.', author: 'Karl Marx'},
  ];
  constructor() { }

  ngOnInit() {
    this.quote = this.getQuote();
  }

  getQuote(){
    return this.quotes[this.getRandomNumber(this.quotes.length)];
  }

  getRandomNumber(max: number){
    return Math.floor(Math.random() * max);
  }

}
