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
    },
    {
      title: 'User Research',
      description: 'blablabla',
      imgPath: 'assets/img/profiles/img-ux-interaction@2x.png',
      color: '#50be87',
    },
    {
      title: 'User Research',
      description: 'blablabla',
      imgPath: 'assets/img/profiles/img-experience-design@2x.png',
      color: '#4bb4e6',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
