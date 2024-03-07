import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let upload;
  let create;
  try {
    upload = await uploadPhoto();
    create = await createUser();
  } catch (error) {
    upload = null;
    create = null;
  }
  return { photo: upload, user: create };
}
