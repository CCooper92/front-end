import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required('Username is required')
    .min(3, "Username must be 3 chars long"),
    password: yup
    .string()
    .required('Password is required'),
    role: yup
    .string()
    .oneOf(['organizer', 'guest'], "role is required")

});