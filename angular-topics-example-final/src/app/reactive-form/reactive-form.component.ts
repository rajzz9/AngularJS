import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, Form } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  singupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor() {  }

  ngOnInit(): void {
    this.singupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.singupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.singupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.singupForm.setValue({
      'userData':{
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender':'male',
      'hobbies': []
    });
     
    this.singupForm.patchValue({
      'userData':{
        'username': 'Anna'
      }
    });
  }

  onSubmit(): void {
    console.log(this.singupForm);
    this.singupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    return (<FormArray>this.singupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.singupForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
  
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
}
