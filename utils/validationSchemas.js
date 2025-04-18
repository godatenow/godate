import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  birthDate: Yup.date()
    .max(new Date(), 'Birth date cannot be in the future')
    .required('Birth date is required'),
  gender: Yup.string()
    .oneOf(['male', 'female', 'other'], 'Please select a valid gender')
    .required('Gender is required'),
});

export const profileSchema = Yup.object().shape({
  bio: Yup.string()
    .max(500, 'Bio must be at most 500 characters'),
  location: Yup.string()
    .required('Location is required'),
  interests: Yup.array()
    .of(Yup.string())
    .min(1, 'Select at least one interest')
    .max(10, 'You can select up to 10 interests'),
  photos: Yup.array()
    .of(Yup.string())
    .min(1, 'Upload at least one photo')
    .max(6, 'You can upload up to 6 photos'),
});

export const matchPreferencesSchema = Yup.object().shape({
  ageRange: Yup.object().shape({
    min: Yup.number()
      .min(18, 'Minimum age must be 18')
      .required('Minimum age is required'),
    max: Yup.number()
      .max(100, 'Maximum age must be 100')
      .moreThan(Yup.ref('min'), 'Maximum age must be greater than minimum age')
      .required('Maximum age is required'),
  }),
  distance: Yup.number()
    .min(1, 'Distance must be at least 1 km')
    .max(100, 'Distance must be at most 100 km')
    .required('Distance is required'),
  interestedIn: Yup.string()
    .oneOf(['male', 'female', 'both'], 'Please select a valid preference')
    .required('Please select who you are interested in'),
}); 