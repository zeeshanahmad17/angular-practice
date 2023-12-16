import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static forbiddenProjectNames(control: FormControl): {
    [key: string]: boolean;
  } {
    if (control.value === 'Test') {
      return { isNameForbidden: true };
    } else {
      return null;
    }
  }

  static asyncForbiddenProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'TestProject') {
          resolve({ isNameForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
