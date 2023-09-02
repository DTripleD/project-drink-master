import styled from "@emotion/styled";

export const SwitchLabel = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 2.5em;
  height: 1.5em;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  background: #161F37;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #161F37;
  transition: 0.5s;
  border-radius: 30px;
  border: 1px solid white

  &::before {
    content: "";
    position: absolute;
    height: 1.1em;
    width: 1.1em;
    border-radius: 50%;
    left: 10%;
    bottom: 15%;
    box-shadow: inset 8px -4px 0px 0px #fff000;
    background: #161F37;
    transition: 0.5s;
  }

  &.active {
    background-color: #73b6ec;

    &::before {
      transform: translateX(100%);
      box-shadow: inset 15px -4px 0px 15px #fff000;
    }
  }
`;
