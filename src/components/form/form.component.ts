import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  //----- using formControl ----------

  // userData = {
  //   firstName: '',
  //   lastName: '',
  //   middleName: ''
  // }

  // firstName = new FormControl();
  // lastName = new FormControl();
  // middleName = new FormControl()


  // onSubmit() {
  //   console.log(this.firstName.value)
  //   console.log(this.lastName.value)
  //   console.log(this.middleName.value)

  //   this.userData.firstName = this.firstName.value;
  // }



  // ----------- GroupControl ----------------
  userForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    middleName: new FormControl(),
  })


  submit() {
    console.log(this.userForm.value)
    this.userForm.setValue({
      firstName: '',
      lastName: '',
      middleName: ''
    });
  }


}
