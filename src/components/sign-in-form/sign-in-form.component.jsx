import { useState } from 'react';

import { signInWithGooglePopup, SignInAuthUserWithEmailAndPass } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import {SignInContainer, ButtonsContainer} from './sign-in-form.styles'

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
        await signInWithGooglePopup();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await SignInAuthUserWithEmailAndPass(email, password);

            resetFormFields();
        } catch (error) {
            console.log('user sign in failed', error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label="Email" className='form-input' name="email" value={email} onChange={handleChange} type="email" required/>

                <FormInput label="Password" className='form-input' name="password" value={password} onChange={handleChange} type="password" required/>

                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}> Google Sign in </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;