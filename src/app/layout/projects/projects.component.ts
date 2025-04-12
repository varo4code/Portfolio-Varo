import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass',
})
export class ProjectsComponent {
  selected: string = 'websites';

  websites = [
    // {
    //   title: 'Portfolio',
    //   comment: 'You are here.',
    //   image: 'assets/projects/portfolio.webp',
    //   technologies: ['NodeJS', 'Angular', 'TypeScript', 'SASS', 'Html5'],
    // },
    {
      title: 'Santander Digital Services',
      comment:
        "Development and enhancement of various internal tools for Banco Santander's management processes over a period of more than three years.",
      image: 'assets/projects/santander.webp',
      technologies: [
        'Java',
        'Maven',
        'Spring Boot',
        'PHP',
        'Laravel',
        'Angular',
        'CSS3',
        'Html5',
      ],
    },
    {
      title: 'Telefónica',
      // comment: "Migration of Telefónica's website to WordPress VIP, with the development of a custom theme and a plugin with exclusive blocks for the Gutenberg editor.",
      image: 'assets/projects/telefonica.webp',
      technologies: ['PHP', 'Wordpress', 'JavaScript', 'CSS3', 'Html5'],
      linkName: 'telefonica.es',
      link: 'https://telefonica.es/',
    },
    {
      title: 'RCI Connect',
      image: 'assets/projects/rciconnect.webp',
      technologies: ['NodeJS', 'Angular', 'TypeScript', 'PHP', 'CSS3', 'Html5'],
      linkName: 'rciconnect.es',
      link: 'https://rciconnect.es/',
    },
    {
      title: 'Kaiku Caffe Latte',
      image: 'assets/projects/kaiku.webp',
      technologies: ['PHP', 'Wordpress', 'JavaScript', 'CSS3', 'Html5'],
      linkName: 'kaikucaffelatte.com',
      link: 'https://kaikucaffelatte.com/',
    },
    {
      title: 'Kaiku Sin Lactosa',
      image: 'assets/projects/kaikusinlactosa.webp',
      technologies: ['PHP', 'Wordpress', 'JavaScript', 'CSS3', 'Html5'],
      linkName: 'kaikusinlactosa.com',
      link: 'https://kaikusinlactosa.com/',
    },
    {
      title: 'Formación Hosteleria',
      image: 'assets/projects/formacionhosteleria.webp',
      technologies: ['PHP', 'Wordpress', 'JavaScript', 'CSS3', 'Html5'],
      linkName: 'formacionhosteleria.es',
      link: 'https://formacionhosteleria.es/',
    },
    {
      title: 'Isis Informatica',
      image: 'assets/projects/isis.webp',
      technologies: ['PHP', 'Wordpress', 'JavaScript', 'CSS3', 'Html5'],
      linkName: 'isisinformatica.es',
      link: 'https://isisinformatica.es/',
    },
  ];

  projects = [
    {
      title: 'Nintendo Switch Redesign',
      image: 'assets/projects/switch.webp',
      comment:
        'Nintendo Switch Redesign made with Vue.js, Nuxt, and Tailwind CSS — a modern UI/UX concept for the Nintendo platform.',
      technologies: [
        'Vue',
        'Nuxt',
        'Vite',
        'TypeScript',
        'Tailwind',
        'Html5',
        'CSS3',
      ],
      linkName: 'Switch Redesign',
      link: 'https://nintendoswitch-varocode.web.app/',
    },
    {
      title: 'Weather Forecast',
      comment:
        'Weather Forecast made with Vue.js and Tailwind CSS, consuming external APIs to display real-time weather data.',
      image: 'assets/projects/weather.webp',
      technologies: ['Vue', 'Vite', 'TypeScript', 'Tailwind', 'Html5', 'CSS3'],
      linkName: 'Weather Forecast',
      link: 'https://weatherforecast-varocode.web.app/',
    },
    {
      title: 'Portfolio',
      comment: 'You are here.',
      image: 'assets/projects/portfolio.webp',
      technologies: ['NodeJS', 'Angular', 'TypeScript', 'SASS', 'Html5'],
    },
    {
      title: 'Tofer',
      comment:
        'New website for Tofer, built with WordPress, designed to showcase their products and catalogs in a clear and professional way.',
      image: 'assets/projects/tofer.webp',
      technologies: ['Wordpress', 'PHP', 'Html5', 'CSS3'],
      linkName: 'Tofer',
      link: 'https://tofer.es',
    },
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  select(option: string) {
    this.selected = option;
  }
}
