import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.components";

import SignInForm from "../../components/sign-in-form/sign-in-form.components";

import Button from "../../components/button/button.component";

const Authentication = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default Authentication;
