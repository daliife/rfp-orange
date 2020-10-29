import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  options: any[] = [
    {
      title: '1. Servicios',
      description: 'fhdskfhdsjfhkldshf kjlfhkjdsl fhkjlshf lkjhflkdlksdjfklfljdsk',
      anchor: '#test'
    },
    {
      title: '2. Perfiles',
      description: 'fhdskfhdsjfhkldshf kjlfhkjdsl fhkjlshf lkjhflkdlksdjfklfljdsk',
      anchor: '#test'
    },
    {
      title: '3. Preguntas',
      description: 'fhdskfhdsjfhkldshf kjlfhkjdsl fhkjlshf lkjhflkdlksdjfklfljdsk',
      anchor: '#test'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
