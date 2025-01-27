import { Component, inject, Input, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconsService } from '@services/icons.service';
import { ButtonComponent } from 'src/app/core/components/button/button.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.sass'
})
export class ProjectCardComponent {
  @Input() project: any;
  @Input() themeColor: 'blue' | 'red' | 'purple' = 'blue';

  iconService: IconsService = inject(IconsService);

  goToProject(link: string) {
    window.open(link, '_blank');
  }

}
