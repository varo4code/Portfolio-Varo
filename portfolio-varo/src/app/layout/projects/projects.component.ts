import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Portfolio',
      image: 'assets/projects/portfolio.webp',
      technologies: ['Angular','TypeScript','SASS','Html5'],
      linkName: 'varocode.com',
      link: 'https://varocode.com/'
    },
    {
      title: 'Santander Digital Services',
      comment: "Development and enhancement of various internal tools for Banco Santander's management processes over a period of more than three years.",
      image: 'assets/projects/santander.webp',
      technologies: ['Java', 'Maven', 'Spring Boot','PHP','Laravel','Html5']
    },
    {
      title: 'Telefónica',
      // comment: "Migration of Telefónica's website to WordPress VIP, with the development of a custom theme and a plugin with exclusive blocks for the Gutenberg editor.",
      image: 'assets/projects/telefonica.webp',
      technologies: ['PHP','Wordpress','JavaScript','CSS3','Html5'],
      linkName: 'telefonica.es',
      link: 'https://telefonica.es/'
    },
    {
      title: 'RCI Connect',
      image: 'assets/projects/rciconnect.webp',
      technologies: ['Angular','PHP','TypeScript','CSS3','Html5'],
      linkName: 'rciconnect.es',
      link: 'https://rciconnect.es/'
    },
    {
      title: 'Isis Informatica',
      image: 'assets/projects/isis.webp',
      technologies: ['PHP','Wordpress','JavaScript','CSS3','Html5'],
      linkName: 'isisinformatica.es',
      link: 'https://isisinformatica.es/'
    }
  ];

}
