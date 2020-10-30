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
        'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam.',
      anchor: '#services',
    },
    {
      title: '2. Perfiles',
      description:
        'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam.',
      anchor: '#profiles',
    },
    {
      title: '3. Preguntas',
      description:
        'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam.',
      anchor: '#questions',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
