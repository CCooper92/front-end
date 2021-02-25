import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('Username is required.')
        .min(3, 'Must have at least 3 characters in the "username" field.'),
    password: yup
        .string()
        .required('Password is required.'),
    role: yup
        .string()
        .oneOf(['organizer', 'guest'], 'You must choose a role.'),
})