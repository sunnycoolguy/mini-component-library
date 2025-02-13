import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small' : {
    '--fontSize' : '14px',
    '--borderBottomThickness' : '1px',
    '--paddingBlock' : '4px',
    '--paddingLeft': '24px',
    '--iconSize' : '16px',
    '--height' : '24px',
  },
  'large' : {
    '--fontSize' : '18px',
    '--borderBottomThickness' : '2px',
    '--paddingBlock' : '8px',
    '--paddingLeft': '36px',
    '--iconSize' : '24px',
    '--height' : '36px',
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input placeholder={placeholder} size={size} width={width} style={styles} label={label}/>
      <IconWrapper style={styles}>
        <Icon id={icon} size={ size === 'small' ? 16 : 24} strokeWidth={2}/>
      </IconWrapper>
    </Wrapper>
  );
};



const Input = styled.input`
  width: ${props => props.width}px;
  height: var(--height);
  border: none;
  font-size: var(--fontSize);
  border-bottom: var(--borderBottomThickness) solid ${COLORS.black};
  padding-block: var(--paddingBlock);
  padding-left: var(--paddingLeft);
  color: ${COLORS.gray700};
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:hover {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const IconWrapper = styled.div`
  position: absolute;
  width: var(--iconSize);
  height: var(--iconSize);
  left: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  color: ${COLORS.gray700};
  pointer-events: none;
  ${Input}:hover + & {
    color: ${COLORS.black}
  }
`;

export default IconInput;
