import { User } from './database/model/User.model';
// import { User } from './database/model/User.model';
const root = document.getElementById('root');
const user = new User(root, 'SALMAN', 'CHOWDHURY');

user.render();
