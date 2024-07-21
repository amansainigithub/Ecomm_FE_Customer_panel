import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fresh-user-register',
  templateUrl: './fresh-user-register.component.html',
  styleUrl: './fresh-user-register.component.css'
})
export class FreshUserRegisterComponent {

  setupPassForm: any = {
    username:null,
    password: null
  };

  receivedData:any;

  constructor(private route: ActivatedRoute,private router: Router,private authService: AuthService) {
    const state = history.state;

    if(state.username == 'undefined' || state.username == null || state.username == '' 
      || state.username == 'null' || state.username == undefined ){
        this.router.navigateByUrl('/register');
      }
    this.setupPassForm.username = state.username;
  
  }

  ngOnInit() {
  }
  

  createAccount()
  {
    console.log(this.createAccount);
    this.authService.registerUser(this.setupPassForm).subscribe(
      data => {
        Swal.fire({
          title: "Congratulations",
          text: "Registration Completed Success",
          icon: "success"
        });
        this.router.navigateByUrl('/login');
      },
      err => {
        alert("Registeration Failed");
        // this.errorMessage = err.error.message;
        // this.isSignUpFailed = true;
      }
    );
  }

}
