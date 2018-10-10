import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-card-historic-context',
  templateUrl: './card-historic-context.component.html',
  styleUrls: ['./card-historic-context.component.css']
})
export class CardHistoricContextComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;

  public nameButton:String[] = ['Romeo', 'Alpha', 'A-ha', 'Me la Pela'];

  public test:string = '(Del latín: “ratio”, razón.) En la teoría del conocimiento, el racionalismo es la tendencia que reconoce la razón como única fuente del auténtico conocimiento, por oposición al empirismo (ver), que considera que la única fuente del conocimiento es la experiencia sensorial. Notables representantes del racionalismo fueron Descartes, Spinoza, Leibnitz; todos ellos lucharon contra la concepción religioso-dogmática del mundo del feudalismo, por el afianzamiento de la razón y de sus derechos. El progenitor del racionalismo de los tiempos modernos fue Descartes, que fundamentó la omnipotencia de la razón, considerándola verídica en sí misma. Los racionalistas veían el ideal de la ciencia en las matemáticas que consideraban como una ciencia “pura”, ajena a la experiencia. Descartes entendía que, así como el matemático con la fuerza de la inteligencia, resuelve los problemas matemáticos, el filósofo puede concebir la verdad por la pura fuerza de la inteligencia. Los datos sensibles nos engañan; sólo por la razón podemos concebir lo existente.';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.asyncTabs = Observable.create((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'General', content: this.test},
          {label: 'Corrientes Antecedentes', content: 'Content 2'},
          {label: 'Corrientes Precedentes', content: 'Content 3'},
          {label: 'Filósofos', content: 'Content 4'},          
        ]);
      }, 500);
    });
  }

  ngOnInit() {
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/facebook.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/twitter.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "instagram",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/instagram.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/linkedin.svg")
    );  
  }

}
