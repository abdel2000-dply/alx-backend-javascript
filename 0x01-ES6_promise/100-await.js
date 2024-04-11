import uploadPhoto from './utils';
import createUser from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await Promise.all(uploadPhoto());
    const user = await Promise.all(createUser());
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
