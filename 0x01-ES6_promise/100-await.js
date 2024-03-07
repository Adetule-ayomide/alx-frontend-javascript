import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  // eslint-disable no-unsed-vars
  try {
    const [upload, create] = await Promise.all([uploadPhoto(), createUser()])
    return {
      photo: upload,
      user: create,
    };
  }
  catch {
    if (upload.status === "rejected" || create.status === "rejected") {
      return ({
        photo: null,
        user: null,
      })
    }
  }
}
