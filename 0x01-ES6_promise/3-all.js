import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((data) => console.log(data.body))
    .then(() => createUser())
    .then((data) => console.log(data.firstName, data.lastName))
    .catch(() => console.error('Signup system offline'));
}
