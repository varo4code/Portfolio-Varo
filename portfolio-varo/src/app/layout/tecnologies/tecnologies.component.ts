import { Component, inject, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconsService } from '@services/icons.service';

@Component({
  selector: 'app-tecnologies',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './tecnologies.component.html',
  styleUrl: './tecnologies.component.sass'
})
export class TecnologiesComponent {
  @Input({required: true}) title = '';
  @Input({required: true}) list : string[] = [];

  iconService: IconsService = inject(IconsService);
}
