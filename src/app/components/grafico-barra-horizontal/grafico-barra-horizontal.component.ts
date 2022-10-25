import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  @Input() result: any[] = [];
  // result: any[] = [
  //   {
  //     name: 'Juego 1',
  //     value: 20,
  //   },
  //   {
  //     name: 'Juego 2',
  //     value: 25,
  //   },
  //   {
  //     name: 'Juego 3',
  //     value: 15,
  //   },
  //   {
  //     name: 'Juego 4',
  //     value: 30,
  //   },
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // intervalo;

  constructor() {
    // this.intervalo = setInterval(() => {
    //   console.log('tick');
    //   const newResult = [...this.result];
    //   for (let i in newResult) {
    //     newResult[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.result = [...newResult];
    // }, 1500);
  }
  ngOnDestroy(): void {
    // clearInterval(this.intervalo);
  }

  onSelect(event) {
    console.log(event);
  }
}
