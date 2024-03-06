import { uploadPhoto, createUser } from './utils';
// eslint-disable-next-line
export default function handleProfileSignup() {
  // eslint-disable-next-line
  Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      // eslint-disable-next-line
      const upload = data[0];
      const create = data[1];

      console.log(upload.body, create.firstName, create.lastName);
    })
    .catch(() => console.error('Signup system offline'));
}
