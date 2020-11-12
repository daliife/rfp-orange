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
      downloadLink: 'assets/img/CVs/User Reserach Expert.pdf',
      stats: [
        {
          name: 'Experiencia',
          imgPath: 'assets/img/profiles/first/diamond.svg',
          value: 5,
        },
        {
          name: 'Empatía',
          imgPath: 'assets/img/profiles/first/star.svg',
          value: 5,
        },
        {
          name: 'Analítico',
          imgPath: 'assets/img/profiles/first/oval.svg',
          value: 5,
        },
        {
          name: 'Objetividad',
          imgPath: 'assets/img/profiles/first/disc.svg',
          value: 5,
        },
      ],
    },
    {
      title: 'UX Interaction Expert',
      description: 'blablabla',
      imgPath: 'assets/img/profiles/img-ux-interaction@2x.png',
      color: '#50be87',
      downloadLink: 'assets/img/CVs/UX Interaction Expert.pdf',
      stats: [
        {
          name: 'Experiencia',
          imgPath: 'assets/img/profiles/third/diamond.svg',
          value: 5,
        },
        {
          name: 'Empatía',
          imgPath: 'assets/img/profiles/third/circle.svg',
          value: 5,
        },
        {
          name: 'Creatividad',
          imgPath: 'assets/img/profiles/third/bulb.svg',
          value: 5,
        },
        {
          name: 'Comunicación',
          imgPath: 'assets/img/profiles/third/flag.svg',
          value: 4,
        },
      ],
    },
    {
      title: 'Experience Design Expert',
      description: 'blablabla',
      imgPath: 'assets/img/profiles/img-experience-design@2x.png',
      color: '#4bb4e6',
      downloadLink: 'assets/img/CVs/User Experience Expert.pdf',
      stats: [
        {
          name: 'Experiencia',
          imgPath: 'assets/img/profiles/second/diamond.svg',
          value: 3,
        },
        {
          name: 'Empatía',
          imgPath: 'assets/img/profiles/second/star.svg',
          value: 5,
        },
        {
          name: 'Creatividad',
          imgPath: 'assets/img/profiles/second/bulb.svg',
          value: 5,
        },
        {
          name: 'Comunicación',
          imgPath: 'assets/img/profiles/second/message-circle.svg',
          value: 5,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
