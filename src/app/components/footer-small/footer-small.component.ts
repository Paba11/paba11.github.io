import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-footer-small',
  templateUrl: './footer-small.component.html',
  styleUrl: './footer-small.component.css'
})
export class FooterSmallComponent {
  firstHalfOptions: string[] = [];
  secondHalfOptions: string[] = [];
  footerOption: string[] = [];
  applications: {img: string, title: string, platforms: string}[] = [];
  isSmall: boolean = false;

  constructor() {
    this.checkWindowSize();

    this.firstHalfOptions = [
      "Nos applications mobiles", "Suivre le Figaro sur Google", "Le Figaro Bordeaux", "Le Figaro Lion",
      "Le Figaro Marseille", "Le Figaro Nantes", "Le Figaro Nice",
    ];

    this.secondHalfOptions = [
      "Les vidéos Figaro", "Les podcast du Figaro",
      "Les programmes TV", "Les resultats sportif", "Carnet du jour", "Figaro store", "Jeux",
    ]

    this.applications = [
      {
        img: "assets/images/symbol.png",
        title: "Le Figaro",
        platforms: "IPhone | Android"
      },
      {
        img: "assets/images/symbol.png",
        title: "Le Figaro Jeux",
        platforms: "IPhone | Android"
      },
      {
        img: "assets/images/symbol.png",
        title: "Le Kiosque Le Figaro",
        platforms: "IPhone | Android"
      },
      {
        img: "assets/images/symbol.png",
        title: "Le Figaro Cusine",
        platforms: "IPhone | Android"
      },
    ];

    this.footerOption = [
      "Paramétrer les cookies", "Plan du site", "Confidentialité", "CGU", "CGV", "Info cookies",
      "Charte", "Aide et contact", "Mentions légales", "Abonnements", "Newsletter", "Publicité", "sitemap",
    ];

  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isSmall = window.innerWidth <= 767;
  }

}
