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
      imgPath: 'assets/img/img-user-research@2x.png',
      color: '#085ebd',
    },
    {
      title: 'User Research',
      description: 'blablabla',
      imgPath: 'assets/img/img-ux-interaction-design@2x.png',
      color: '#ff8ad4',
    },
    {
      title: 'User Research',
      description: 'blablabla',
      imgPath: 'assets/img/img-experience-design@2x.png',
      color: '#ffb400',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
