import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value })
    };

    return (
        <div>
            <h1>Sign-up with your email and password</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}></input>
                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email}></input>
                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} ></input>
                <label>Confirm password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm