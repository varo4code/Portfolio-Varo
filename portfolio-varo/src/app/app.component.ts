import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { TecnologiesComponent } from './tecnologies/tecnologies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainBannerComponent, TecnologiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'portfolio-varo';

  titleSkills = "Technologies I use";
  skillList = [
    { name: 'PHP', icon: 'assets/icons/php.svg' },
    { name: 'Laravel', icon: 'assets/icons/laravel.svg' },
    { name: 'Symfony', icon: 'assets/icons/symfony.svg' },
    { name: 'Wordpress', icon: 'assets/icons/wordpress.svg' },
    { name: 'Java', icon: 'assets/icons/java.svg' },
    { name: 'Spring Boot', icon: 'assets/icons/spring-boot.svg' },
    { name: 'MySQL', icon: 'assets/icons/mysql.svg' },
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'NodeJS', icon: 'assets/icons/node-js.svg' },
    { name: 'SASS', icon: 'assets/icons/sass.svg' },
    { name: 'Bootstrap', icon: 'assets/icons/bootstrap.svg' },
    { name: 'jQuery', icon: 'assets/icons/jquery.svg' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'CSS3', icon: 'assets/icons/css3.svg'  },
    { name: 'Html5', icon: 'assets/icons/html5.svg' },
    { name: 'Git', icon: 'assets/icons/git.svg' }
  ];

  titleApps = "Tools I use";
  AppList = [
    { name: 'Visual Studio Code', icon: 'assets/icons/visual-studio-code.svg' },
    { name: 'Eclipse', icon: 'assets/icons/eclipse.svg' },
    { name: 'Github', icon: 'assets/icons/github.svg' },
    { name: 'Github Copilot', icon: 'assets/icons/github-copilot.svg' },
    { name: 'Swagger', icon: 'assets/icons/swagger.svg' },  
    { name: 'Jenkins', icon: 'assets/icons/jenkins.svg' },
    { name: 'OpenShift', icon: 'assets/icons/openshift.svg' },
    { name: 'Postman', icon: 'assets/icons/postman.svg' },
    { name: 'Jira', icon: 'assets/icons/jira.svg' },
  ];

}
