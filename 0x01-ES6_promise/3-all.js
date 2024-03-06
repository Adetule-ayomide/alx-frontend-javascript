import { uploadPhoto, createUser } from './utils';
/* eslint-disable no-unused-vars */
export default function handleProfileSignup() {
  /* eslint-disable no-unused-vars */
  Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      /* eslint-disable no-unused-vars */
      const upload = data[0];
      const create = data[1];

      console.log(upload.body, create.firstName, create.lastName);
    })
    .catch(() => console.error('Signup system offline'));
}
