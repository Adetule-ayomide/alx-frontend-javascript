import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      /* eslint-disable no-unused-vars */
      const upload = data[0];
      const create = data[1];

      console.log(upload.body, create.firstName, create.lastName);
    })
    .catch(() => console.error('Signup system offline'));
}
