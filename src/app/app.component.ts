import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './header/navbar/navbar.component';
import { MainBannerComponent } from './layout/main-banner/main-banner.component';
import { TecnologiesComponent } from './layout/tecnologies/tecnologies.component';
import { ProjectCardComponent } from './layout/projects/project-card/project-card.component';
import { ProjectsComponent } from './layout/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {}
