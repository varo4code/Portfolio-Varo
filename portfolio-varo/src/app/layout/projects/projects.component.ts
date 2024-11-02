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
      title: 'Telefónica',
      comment: 'asd asdas asdas',
      image: 'assets/projects/telefonica.webp',
      technologies: ['PHP','Wordpress','JavaScript','CSS3','Html5'],
      linkName: 'telefonica.es',
      link: 'https://telefonica.es/'
    },
    {
      title: 'RCI Connect',
      image: 'assets/testimage.png',
      technologies: ['Angular','PHP','JavaScript','CSS3','Html5'],
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
