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
      title: 'Aurora San Municio',
      subtitle: 'Directora Sector Telecom',
      imgPath: 'assets/img/collaborators/img-aurora@2x.png'
    },
    {
      title: 'Fernando Gil Sole',
      subtitle: 'Digital Experience Manager',
      imgPath: 'assets/img/collaborators/img-fernando@2x.png'
    },
    {
      title: 'Isabel Blas Moreno',
      subtitle: 'Experience Design Manager',
      imgPath: 'assets/img/collaborators/img-isabel@2x.png'
    },
    {
      title: 'Elena Marín-Dorado',
      subtitle: 'Experience Design Project Leader',
      imgPath: 'assets/img/collaborators/img-elena@2x.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.collaborators = this.collaboratorsMock;
  }

}
