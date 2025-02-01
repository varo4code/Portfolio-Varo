import { Component } from '@angular/core';
import { NavbarComponent } from '../header/navbar/navbar.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { TecnologiesComponent } from './tecnologies/tecnologies.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    MainBannerComponent,
    TecnologiesComponent,
    ProjectsComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.sass',
})
export class MainLayoutComponent {
  title = 'portfolio-varo';

  titleSkills = 'Technologies I use';
  skillList = [
    'PHP',
    'Laravel',
    'Symfony',
    'Java',
    'Maven',
    'Spring Boot',
    'MySQL',
    'Wordpress',
    'Angular',
    'NodeJS',
    'SASS',
    'Bootstrap',
    'jQuery',
    'JavaScript',
    'CSS3',
    'Html5',
    'Git',
  ];

  titleApps = 'Tools I use';
  AppList = [
    'Visual Studio Code',
    'Eclipse',
    'Github',
    'Github Copilot',
    'Swagger',
    'ChatGPT',
    'Jenkins',
    'OpenShift',
    'Postman',
    'Jira',
  ];
}
