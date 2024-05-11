import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  AppointImg,
  AppointText,
  AppointTile,
  FormArea,
  FormBtn,
  FormContainer,
  FormError,
  FormInput,
  FormList,
  ImgName,
  ImgText,
  ImgWrapp,
  InputWrapp,
} from './AppointmentModal.styled';
const phoneRegExp = /^\+[0-9]{1,3}[0-9]{3}[0-9]{3}[0-9]{4}$/;
const timeRegExp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

const appointmentSchema = yup
  .object({
    address: yup.string().required('Address is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Invalid phone number')
      .required('Phone number is required'),
    age: yup.string().required('Age is required'),
    time: yup
      .string()
      .matches(timeRegExp, 'Invalid time format')
      .required('Time is required'),
    email: yup
      .string()
      .email('Must be a valid email')
      .required('Email is required'),
    name: yup.string().required('Name is required'),
    comment: yup.string(),
  })
  .required();

export default function AppointmentForm({ name, avatar }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appointmentSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <AppointTile>Make an appointment with a babysitter</AppointTile>
      <AppointText>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </AppointText>

      <ImgWrapp>
        <AppointImg src={avatar} alt={name} />
        <div>
          <ImgText>Your nanny</ImgText>
          <ImgName>{name}</ImgName>
        </div>
      </ImgWrapp>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormList>
          <InputWrapp>
            <FormInput {...register('address')} placeholder="Address" />
            <FormError>{errors.address?.message}</FormError>
          </InputWrapp>

          <InputWrapp>
            <FormInput {...register('phone')} placeholder="+380" type="tel" />
            <FormError>{errors.phone?.message}</FormError>
          </InputWrapp>

          <InputWrapp>
            <FormInput {...register('age')} placeholder="Child's age" />
            <FormError>{errors.age?.message}</FormError>
          </InputWrapp>

          <InputWrapp>
            <FormInput {...register('time')} placeholder="00:00" type="time" />
            <FormError>{errors.time?.message}</FormError>
          </InputWrapp>
        </FormList>

        <InputWrapp>
          <FormInput {...register('email')} placeholder="Email" type="email" />
          <FormError>{errors.email?.message}</FormError>
        </InputWrapp>

        <InputWrapp>
          <FormInput
            {...register('name')}
            placeholder="Father's or mother's name"
          />
          <FormError>{errors.name?.message}</FormError>
        </InputWrapp>

        <InputWrapp>
          <FormArea {...register('comment')} placeholder="Comment" rows={4} />
          <FormError>{errors.comment?.message}</FormError>
        </InputWrapp>

        <FormBtn type="submit">Send</FormBtn>
      </FormContainer>
    </>
  );
}
