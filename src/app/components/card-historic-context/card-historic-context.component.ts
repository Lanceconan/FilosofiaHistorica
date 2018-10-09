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

  public test:string = 'Es también conocido como Cartesius, que era la forma latinizada en la que escribía su nombre' +  
  'onomástico del que se deriva el adjetivo cartesiano usado en el contexto de la matemática: plano cartesiano, por ejemplo.' +
  'Hizo famoso el célebre principio cogito ergo sum (‘pienso, luego existo’), elemento esencial del racionalismo occidental,' +
  'y formuló el conocido como «método cartesiano», pero del cogito ya existían formulaciones anteriores, alguna tan exacta a ' +
  'la suya como la de Gómez Pereira en 1554, y del Método consta la formulación previa que del mismo hizo Francisco Sánchez ' + 
  'en 1576.4​ Todo ello con antecedentes en Agustín de Hipona5​ y Avicena,6​ por lo que ya en su siglo fue acusado de plagio,'+ 
  'entre otros por Pierre Daniel Huet Estatua de René Descartes en La Haye-Descartes.'+
  'Escribió una parte de sus obras en latín, que era la lengua franca de los expertos; y, la otra parte de su producción,'+
  'en su idioma nativo. En física está considerado como el creador del mecanicismo, y en matemática, de la geometría analítica.' + 
  'Se le asocia con los ejes cartesianos en geometría, con la iatromecánica y la fisiología mecanicista en medicina, con el principio '+
  'de inercia en física, con el dualismo filosófico mente/cuerpo y el dualismo metafísico materia/espíritu. No obstante, parte de sus ' +
  'teorías han sido rebatidas —teoría del animal-máquina— o incluso abandonadas —teoría de los vórtices—.' + 
  'Su pensamiento pudo aproximarse a la pintura de Poussin​ por su estilo claro y ordenado.';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.asyncTabs = Observable.create((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'General', content: this.test},
          {label: 'Vida', content: 'Content 2'},
          {label: 'Hitos', content: 'Content 3'},
          {label: 'Bibliografía', content: 'Content 4'},
          {label: 'Referencias', content: 'Content 5'},
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
