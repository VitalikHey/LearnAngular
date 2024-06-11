import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input()title?: string

  public myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', Validators.required),
  })

  public handleClickForm(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value.login)
      console.log(this.myForm.value.email)
      console.log(this.myForm.value.number)
    } else {
      alert("Форма не валидна")
    }
  }
}

