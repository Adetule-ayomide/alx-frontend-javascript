import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const [upload, create] = await Promise.all([uploadPhoto(), createUser()])

    if (upload.status === "rejected" || create.status === "rejected") {
      return ({
        photo: null,
        user: null,
      })
    }

    return ({
      photo: upload,
      user: create,
    });
  }
