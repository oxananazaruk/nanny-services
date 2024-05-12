import { auth } from '../../firebase';
import { registerFailure, registerRequest, registerSuccess } from './slice';

export const registerUser = (email, password) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const { user } = userCredential;
    const token = await user.getIdToken();
    dispatch(registerSuccess({ user, token }));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};
