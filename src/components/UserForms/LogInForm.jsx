import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormBtn,
  FormContainer,
  FormError,
  FormInput,
  FormText,
  FormTile,
  InputWrapp,
} from './LogInForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
import { selectError } from '../../redux/auth/selectors';
import toast from 'react-hot-toast';

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email('Must be a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Must be at least 6 characters long')
      .required('Password is required'),
  })
  .required();

export default function LogInForm() {
  const error = useSelector(selectError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
    if (error) {
      toast.error('Invalid login or password. Please check your details.');
    }
  };

  return (
    <>
      <FormTile>Log In</FormTile>
      <FormText>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </FormText>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputWrapp>
          <FormInput {...register('email')} placeholder="Email" />
          <FormError>{errors.email?.message}</FormError>
        </InputWrapp>

        <InputWrapp>
          <FormInput {...register('password')} placeholder="Password" />
          <FormError>{errors.password?.message}</FormError>
        </InputWrapp>

        <FormBtn type="submit" onSubmit={onSubmit}>
          Log in
        </FormBtn>
      </FormContainer>
    </>
  );
}
