import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let upload, create;

  try {
    [upload, create] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo: upload,
      user: create,
    };
  } catch (error) {

    if (upload && upload.status === "rejected" || create && create.status === "rejected") {
      return {
        photo: null,
        user: null,
      };
    }
  }
}
