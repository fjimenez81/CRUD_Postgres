import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { FormGroup, NgForm, Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
        
  }

  addUser(form: NgForm)
  {
    this.userService.createUser(form.value).subscribe(res => {
      form.reset()
    })
  }

}
