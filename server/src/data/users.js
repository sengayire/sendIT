import moment from 'moment';
import uuid from 'uuid';

const Users = [
  {
    id: 'dc20098c-a5a2-4694-8379-62d41ca03341',
    firstName: 'Daniel',
    lastName: 'Nziranziza',
    email: 'nziranzizadaniel@gmail.com',
    createdDate: moment.now(),
    password: '123456789',
    userName: 'Daniel',
    loggedIn: false,
  },
  {
    id: uuid.v4(),
    firstName: 'Jennah',
    lastName: 'Haque',
    email: 'jhaque@gmail.com',
    createdDate: moment.now(),
    password: '123456789',
    userName: 'Jennah',
    loggedIn: false,
  },
  {
    id: uuid.v4(),
    firstName: 'Mucyo',
    lastName: 'Elie',
    email: 'mucyoelie@gmail.com',
    createdDate: moment.now(),
    password: '123456789',
    userName: 'Mucyo',
    loggedIn: false,
  },
];

export default Users;
// const users = [
//   {
//     id: '3434-5656-5656-9999',
//     firstname: ' prince',
//     midlename: 'gikundiro',
//     lastname: 'sengayire',
//     email: ' psengayire@gmail.com',
//     password: '',
//   },
// ];
// export default users;
