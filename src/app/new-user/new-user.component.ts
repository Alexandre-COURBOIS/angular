import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../models/user.model';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      _firstName: ['', [Validators.required, Validators.min(2)]],
      _lastName: ['', [Validators.required, Validators.min(2)]],
      _email: ['', [Validators.required, Validators.email]],
      _age: ['', Validators.required],
      /*ci dessous, permet de gérer une insertion dynamique qui s'adapte en fonction des besoins*/
      _hobbies: this.formBuilder.array([])
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;

    const newUser = new User(
      formValue['_firstName'],
      formValue['_lastName'],
      formValue['_email'],
      formValue['_age'],
      formValue['_hobbies'] ? formValue['_hobbies'] : []
    );

    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  getHobbies() {
    return this.userForm.get('_hobbies') as FormArray;
  }

  addHobby() {
    /*A partir du moment où le champ est créer il devient requis grace a .control*/
    const newHobbyControl = this.formBuilder.control('',Validators.required);
    this.getHobbies().push(newHobbyControl);
  }

}
