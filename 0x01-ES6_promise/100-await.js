import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let upload, create;
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }
  return { photo: upload, user: create };
}
