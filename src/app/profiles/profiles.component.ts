import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {
  profiles: any[] = [
    {
      title: 'User Research Expert',
      description: 'blablabla',
      imgPath: 'assets/img/profiles/img-user-research@2x.png',
      color: '#ff8ad4',
      downloadLink: 'https://google.com',
      stats: [
        {
          name: 'Experiencia',
          imgPath: 'assets/img/profiles/img-user-research@2x.png',
          value: 1,
        },
        {
          name: 'Empatía',
          imgPath: 'assets/img/profiles/img-user-research@2x.png',
          value: 2,
        },
        {
          name: 'Analítico',
          imgPath: 'assets/img/profiles/img-user-research@2x.png',
          value: 3,
        },
        {
          name: 'Objetividad',
          imgPath: 'assets/img/profiles/img-user-research@2x.png',
          value: 4,
        },
      ],
    },
    {
      title: 'UX Interaction Expert',
      description: 'blablabla',
      imgPath: 'assets/img/profiles/img-ux-interaction@2x.png',
      color: '#50be87',
      downloadLink: 'https://google.com',
      stats: [
        {
          name: 'Experiencia',
          imgPath: 'assets/img/profiles/img-ux-interaction@2x.png',
          value: 4,
        },
        {
          name: 'Empatía',
          imgPath: 'assets/img/profiles/img-ux-interaction@2x.png',
          value: 3,
        },
        {
          name: 'Creatividad',
          imgPath: 'assets/img/profiles/img-ux-interaction@2x.png',
          value: 2,
        },
        {
          name: 'Comunicación',
          imgPath: 'assets/img/profiles/img-ux-interaction@2x.png',
          value: 2,
        },
      ],
    },
    {
      title: 'Experience Design Expert',
      description: 'blablabla',
      imgPath: 'assets/img/profiles/img-experience-design@2x.png',
      color: '#4bb4e6',
      downloadLink: 'https://google.com',
      stats: [
        {
          name: 'Experiencia',
          imgPath: 'assets/img/profiles/img-experience-design@2x.png',
          value: 4,
        },
        {
          name: 'Analítico',
          imgPath: 'assets/img/profiles/img-experience-design@2x.png',
          value: 3,
        },
        {
          name: 'Creatividad',
          imgPath: 'assets/img/profiles/img-experience-design@2x.png',
          value: 2,
        },
        {
          name: 'Innovación',
          imgPath: 'assets/img/profiles/img-experience-design@2x.png',
          value: 2,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
