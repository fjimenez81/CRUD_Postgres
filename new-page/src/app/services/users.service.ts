import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL_API: string = 'http://localhost:6200/api/users'

  users: User[] = []
  selectedUser: User

  constructor(private http: HttpClient) { this.selectedUser = new User() }

  getUsers()
  {
    return this.http.get<User[]>(this.URL_API)
  }

  createUser(user: User)
  {
    return this.http.post<any>(this.URL_API, user)
  }

  

}
