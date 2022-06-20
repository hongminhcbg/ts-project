import {sum, XXX} from './utils/tools';
import {NewUser} from './user/user';

function main() {
  console.log(sum(4, XXX));
  console.log(XXX);

  let u = NewUser('mint', 25);
  console.log(u.get_age());
  console.log(u.get_name(), u.get_salary());
}

main()
