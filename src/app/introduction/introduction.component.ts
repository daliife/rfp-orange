import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  options: any[] = [
    {
      title: '1. Servicios',
      description:
        'Para saber qué necesitan nuestros clientes, primero tenemos que entenderlos. ¿Conoces todos los servicios?',
      anchor: '#services',
    },
    {
      title: '2. Perfiles',
      description:
        'El equipo de diseño está formado por distintos perfiles. Conoce cuál es el más adecuado en cada momento.',
      anchor: '#profiles',
    },
    {
      title: '3. Preguntas',
      description:
        'No hay mejor forma de asentar conocimientos que a través de una dinámica. ¡Desafíate con nuestro juego de preguntas!',
      anchor: '#questions',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
