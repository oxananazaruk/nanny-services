import { app } from '../../firebase';
import {
  registerPending,
  registerFulfilled,
  registerRejected,
  loginPending,
  loginFulfilled,
  loginRejected,
} from './slice';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

const auth = getAuth(app);

export const registerUser =
  ({ email, password, name }) =>
  async (dispatch) => {
    dispatch(registerPending());
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;

      console.log(' user', user);

      // user.displayName = name;
      await updateProfile({
        displayName: name,
      });

      const token = await user.getIdToken();
      dispatch(registerFulfilled({ email: user.email, name, token }));
    } catch (error) {
      dispatch(registerRejected(error.message));
    }
  };

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(loginPending());
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { user } = userCredential;

      console.log(' userLogin', user);
      const token = await user.getIdToken();
      const name = user.displayName;
      dispatch(loginFulfilled({ email: user.email, token, name }));
    } catch (error) {
      dispatch(loginRejected(error.message));
    }
  };
