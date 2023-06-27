import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => (
      res.map((item) => ({
        status: item.status,
        value: item.status === 'fulfilled' ? item.value : String(item.reason),
      }))
    ));
}
