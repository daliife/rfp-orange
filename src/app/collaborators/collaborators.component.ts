import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {

  collaborators: any[];

  private collaboratorsMock = [
    {
      title: 'Aurora',
      subtitle: 'Directora Sector',
      imgPath: 'https://via.placeholder.com/160'
    },
    {
      title: 'Aurora',
      subtitle: 'Directora Sector',
      imgPath: 'https://via.placeholder.com/160'
    },
    {
      title: 'Aurora',
      subtitle: 'Directora Sector',
      imgPath: 'https://via.placeholder.com/160'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.collaborators = this.collaboratorsMock;
  }

}
