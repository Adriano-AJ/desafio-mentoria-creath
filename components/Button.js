import styled from 'styled-components';

const StyledButton = styled.button`
  font-weight: 500;
  color: #fff;
  padding: 0.5rem 2rem;
  background-color: #3867e2;
  border-radius: 0.625rem;
  border: 0;
  height: 35px;
  font-size: 16px;
`;

const Button = ({ type, label, clickHandler }) => {
  return (
    <StyledButton type={type} onClick={clickHandler}>
      {label}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'button',
  label: 'Click Me',
};

export default Button;
