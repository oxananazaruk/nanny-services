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
import { registerUser } from '../../redux/auth/operations';
import { selectError } from '../../redux/auth/selectors';
import toast from 'react-hot-toast';

const registerSchema = yup
  .object({
    name: yup
      .string()
      .min(2, 'Must be at least 2 characters long')
      .required('Name is required'),
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

export default function RegistrationForm() {
  const error = useSelector(selectError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = ({ email, password, name }) => {
    dispatch(registerUser({ email, password, name }));
    if (error) {
      toast.error('Invalid login or password. Please check your details.');
    }
  };

  return (
    <>
      <FormTile>Registration</FormTile>
      <FormText>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </FormText>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputWrapp>
          <FormInput {...register('name')} placeholder="Name" />
          <FormError>{errors.name?.message}</FormError>
        </InputWrapp>

        <InputWrapp>
          <FormInput {...register('email')} placeholder="Email" />
          <FormError>{errors.email?.message}</FormError>
        </InputWrapp>

        <InputWrapp>
          <FormInput {...register('password')} placeholder="Password" />
          <FormError>{errors.password?.message}</FormError>
        </InputWrapp>

        <FormBtn type="submit">Sign Up</FormBtn>
      </FormContainer>
    </>
  );
}
