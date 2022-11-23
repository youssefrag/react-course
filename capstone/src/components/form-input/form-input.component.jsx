import { Group, StyledFormInput } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <StyledFormInput {...otherProps}></StyledFormInput>
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </Group>
  );
};

export default FormInput;
