import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-official-information',
  templateUrl: './official-information.component.html',
  styleUrls: ['./official-information.component.css'],
})
export class OfficialInformationComponent {
  @Input() officialFormGroup: FormGroup;
}
