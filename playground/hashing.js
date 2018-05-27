// const {SHA256} = require('crypto-js');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = 'asd123';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

const hashedPassword = '$2a$10$xB.QHBMM5NumgUZcdoTwAe8RjR9oo2zkC04zjg8dzCghf.OEQ2uk2';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// const data = {
//     id: 10
// };

// const token = jwt.sign(data, '123asd');
// console.log('token: ', token);

// const decoded = jwt.verify(token, '123asd');
// console.log('decoded: ', decoded);

// const message = 'I am user number 3';
// const hash = SHA256(message).toString();

// console.log('message: ', message);
// console.log('hash: ', hash);

// const data = {
//     id: 4
// };

// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }