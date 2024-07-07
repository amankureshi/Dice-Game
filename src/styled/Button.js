import styled from "styled-components";

export const Button = styled.button`
  border: none;
  padding: 10px 18px;
  min-width: 220px;
  background-color: #101010;
  color: #fff;
  border-radius: 5px;
  border: 2px solid transparent;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.3s all ease-in;

  &:hover {
    background-color: transparent;
    color: #101010;
    font-weight: 600;
    border: 2px solid #101010;
    transition: 0.3s all ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: transparent;
  border: 2px solid #101010;
  color: #101010;
  &:hover {
    background-color: #101010;
    color: #fff;
    font-weight: 600;
    border: 2px solid transparent;
  }
`;
