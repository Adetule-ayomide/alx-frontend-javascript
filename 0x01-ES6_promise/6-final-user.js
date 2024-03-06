import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signup = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([signup, upload])
    .then((data) => {
      if (data.status === 'pending') {
        return ({
          status: data.status,
          value: data.value,
	});
      }
      else if (data.status === 'fulfilled') {
        return ({
          status: data.status,
          value: data.value,
	})
      }
      else {
        return ({
        status: data.status,
        value: data.value,
        })
      }
    })
}
