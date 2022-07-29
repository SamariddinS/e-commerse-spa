import { signInWithGooglePopup, createUserDocFromAuth, SignInAuthUserWithEmailAndPass } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'
import './sign-in-form.style.scss'
import { useState } from 'react';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await SignInAuthUserWithEmailAndPass(email, password);
            console.log(res);
            resetFormFields();
        } catch (error) {
            // if()
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <FormInput label="Email" className='form-input' name="email" value={email} onChange={handleChange} type="email" required/>

                <FormInput label="Password" className='form-input' name="password" value={password} onChange={handleChange} type="password" required/>

                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}> Google Sign in </Button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm;