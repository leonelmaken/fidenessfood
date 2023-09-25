import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  public platForm : FormGroup | undefined;

  constructor(private fb: FormBuilder, private router:Router,private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.platForm = this.fb.group({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        birthdayDate: new FormControl(''),
        gender: new FormControl('female'),  // Default to Female
        emailAddress: new FormControl(''),
        phoneNumber: new FormControl(''),
        weight: new FormControl('')
    });
  }

  onSubmit(): void {
    if (this.platForm) {
        const formData = this.platForm.value;
        this.userDataService.saveUserData(formData);
        this.router.navigate(['/user']);
    }
  }
}
