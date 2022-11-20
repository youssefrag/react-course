import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user. Email already in use");
      } else {
        console.log("user creation encountered an error:", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          value={displayName}
          name="displayName"
        />

        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          value={email}
          name="email"
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          value={password}
          name="password"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
