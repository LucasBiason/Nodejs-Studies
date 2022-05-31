import {User} from '@models/User';

export class UserController {
  test() {
    const user = new User();
    console.log(user);
  }
}
