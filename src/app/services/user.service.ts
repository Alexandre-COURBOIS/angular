import {User} from '../models/user.model';
import {Subject} from 'rxjs';

export class UserService {
  private users : User[] = [
    {
      _firstName: 'John',
      _lastName: 'Doe',
      _email: 'johnDoe@gmail.com',
      _age: 56,
      _hobbies: ['patin artistique','Equitation']
    }
  ];

  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

}
