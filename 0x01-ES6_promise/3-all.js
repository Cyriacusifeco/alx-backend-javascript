import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  Promise.all(promises)
    .then((results) => {
      const [photoResponse, userResponse] = results;
      console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

handleProfileSignup();
