import { AdminUser } from '@/model/AdminUser';
import { User } from '@/model/User.model';

// const combine = (a: number | string, b: number | string): number | string => {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }
//   return "HELLO " + a.toString() + " " + b.toString();
// };

// const combineNumbers = combine(6, 5);
// console.log(combineNumbers);

// const combineNames = combine("SALMAN", "AKASH");
// console.log(combineNames);

const user = new User('SAMU', 'CHY');
console.log(user.getName());

const admin = new AdminUser('SALMAN', 'AKASH');
console.log(admin.getName());
