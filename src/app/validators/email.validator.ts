import { AbstractControl } from "@angular/forms";
import { isEmpty } from "lodash";
export function EmailValidator(
  control: AbstractControl
): { [key: string]: any } {
  const email = control.value;
  const valid = true;

  return !valid ? { email: { value: control.value } } : null;
}
