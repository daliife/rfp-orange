import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {
  profiles: any[] = [
    {
      title: 'User Research',
      description: 'blablabla',
      imgPath: 'assets/img/profiles/img-user-research@2x.png',
      color: '#ff8ad4',
      stats:{
        experience: 4,
        empathy: 3,
        analitical: 2,
        objectivity: 1,
      }
    },
    {
      title: 'User Research',
      description: 'blablabla',
      imgPath: 'assets/img/profiles/img-ux-interaction@2x.png',
      color: '#50be87',
      stats:{
        experience: 4,
        empathy: 3,
        analitical: 2,
        objectivity: 1,
      }
    },
    {
      title: 'User Research',
      description: 'blablabla',
      imgPath: 'assets/img/profiles/img-experience-design@2x.png',
      color: '#4bb4e6',
      stats:{
        experience: 4,
        empathy: 3,
        analitical: 2,
        objectivity: 1,
      }
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
