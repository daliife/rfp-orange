import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-services-carousel',
  templateUrl: './services-carousel.component.html',
  styleUrls: ['./services-carousel.component.scss']
})
export class ServicesCarouselComponent implements OnInit {

  constructor() { }

  modalShown = false;

  serviceActive: any =  {
    id: 1,
    title: 'Mapa de empatía',
    iconPath: 'assets/renders/1.PNG',
    description: 'description value',
    reason: 'reason value',
    phases: [ '1', '2', '3', '4'],
    participants: ['1', '2', '3'],
    profiles: ['1', '2', '3']
  };

  services: any[] = [
    {
      id: 1,
      title: 'Mapa de empatía',
      iconPath: 'assets/renders/1.PNG',
      description: 'description value',
      reason: 'reason value',
      phases: [ '1', '2', '3', '4'],
      participants: ['1', '2', '3'],
      profiles: ['1', '2', '3']
    },
    {
      id: 2,
      title: 'Mapa de empatía',
      iconPath: 'assets/renders/1.PNG',
      description: 'description value',
      reason: 'reason value',
      phases: [ '1', '2', '3', '4'],
      participants: ['1', '2', '3'],
      profiles: ['1', '2', '3']
    },
    {
      id: 3,
      title: 'Mapa de empatía',
      iconPath: 'assets/renders/1.PNG',
      description: 'description value',
      reason: 'reason value',
      phases: [ '1', '2', '3', '4'],
      participants: ['1', '2', '3'],
      profiles: ['1', '2', '3']
    },
    {
      id: 4,
      title: 'Mapa de empatía',
      iconPath: 'assets/renders/1.PNG',
      description: 'description value',
      reason: 'reason value',
      phases: [ '1', '2', '3', '4'],
      participants: ['1', '2', '3'],
      profiles: ['1', '2', '3']
    },
    {
      id: 5,
      title: 'Mapa de empatía',
      iconPath: 'assets/renders/1.PNG',
      description: 'description value',
      reason: 'reason value',
      phases: [ '1', '2', '3', '4'],
      participants: ['1', '2', '3'],
      profiles: ['1', '2', '3']
    },
    {
      id: 6,
      title: 'Mapa de empatía',
      iconPath: 'assets/renders/1.PNG',
      description: 'description value',
      reason: 'reason value',
      phases: [ '1', '2', '3', '4'],
      participants: ['1', '2', '3'],
      profiles: ['1', '2', '3']
    },
    {
      id: 7,
      title: 'Mapa de empatía',
      iconPath: 'assets/renders/1.PNG',
      description: 'description value',
      reason: 'reason value',
      phases: [ '1', '2', '3', '4'],
      participants: ['1', '2', '3'],
      profiles: ['1', '2', '3']
    },
    {
      id: 8,
      title: 'Mapa de empatía',
      iconPath: 'assets/renders/1.PNG',
      description: 'description value',
      reason: 'reason value',
      phases: [ '1', '2', '3', '4'],
      participants: ['1', '2', '3'],
      profiles: ['1', '2', '3']
    },
    {
      id: 9,
      title: 'Mapa de empatía',
      iconPath: 'assets/renders/1.PNG',
      description: 'description value',
      reason: 'reason value',
      phases: [ '1', '2', '3', '4'],
      participants: ['1', '2', '3'],
      profiles: ['1', '2', '3']
    },
    {
      id: 10,
      title: 'Mapa de empatía',
      iconPath: 'assets/renders/1.PNG',
      description: 'description value',
      reason: 'reason value',
      phases: [ '1', '2', '3', '4'],
      participants: ['1', '2', '3'],
      profiles: ['1', '2', '3']
    },
  ];

  ngOnInit(): void { }

  onClick(newService: number): void{
    $('#exampleModalCenter').modal('toggle');
    this.serviceActive = newService;
  }

  toggleModal(): void{
    this.modalShown = !this.modalShown;
  }

}
