import { AfterViewInit, Component, OnInit } from '@angular/core';
import { servicesMock } from './services-carousel.mock';
declare var $: any;

@Component({
  selector: 'app-services-carousel',
  templateUrl: './services-carousel.component.html',
  styleUrls: ['./services-carousel.component.scss'],
})
export class ServicesCarouselComponent implements OnInit, AfterViewInit {

  constructor() {}

  services: any;

  serviceActive: any = servicesMock[0];

  participantsColors: string[] = ['#a885d8', '#ff7900', '#ffb4e6'];

  profilesColors: string[] = ['#ff8ad4', '#50be87', '#4bb4e6'];

  profilesPaths = [
    'assets/img/profiles/img-user-research.png',
    'assets/img/profiles/img-ux-interaction.png',
    'assets/img/profiles/img-experience-design.png',
  ];

  ngOnInit(): void {
    const numDivisions = 10;
    this.services = new Array(Math.ceil(servicesMock.length / numDivisions))
      .fill(1)
      .map((_) => servicesMock.splice(0, numDivisions));
  }

  ngAfterViewInit(): void {
    $('.carousel').carousel({
      interval: false,
    });
    $('.carousel-item').first().addClass('active');
  }

  onClick(newService: number): void {
    $('#exampleModalCenter').modal('toggle');
    this.serviceActive = newService;
  }
}
