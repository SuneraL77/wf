import  * as Yup from "yup";
export const singUpSchema = Yup.object({
    name:Yup.string()
    .required("Full name is required")
    .matches(/^[a-zA-Z_ ]*$/,"No special chareters allowed")
    .min(2,"Name must be between 2 and 16 characters")
    .max(16,"Name must be between 2 and 16 characters"),
    email:Yup.string()
    .required("Email address is required.")
    .email("Invalid email adress."),
    status:Yup.string()
    .max(64,"Status must be less 64 charachters") ,
    password:Yup.string().required("Password is required.")
    .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,"Password must contain atleast 6 charachters 1 lowercase ,1 uppercase ,1 spesiall characters")

});

export const singInSchema = Yup.object({
    email:Yup.string()
    .required("Email address is required.")
    .email("Invalid email adress."),
    password:Yup.string().required("Password is required.")

});