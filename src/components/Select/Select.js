import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <FauxSelect>
        {displayedValue}
        <IconWrapper data-testid='icon-wrapper' style={{'--size' : '24px'}}>
          <Icon id='chevron-down' size={'24'}/>
        </IconWrapper>
      </FauxSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;


const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const FauxSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  color: ${COLORS.gray700};
  border-radius: 8px;
  pointer-events: none;
  ${NativeSelect}:hover + & {
    color: black;
  }
  
  ${NativeSelect}:focus + & {
    outline: 2px auto #4374CB;
  } 
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: var(--size);
  width: var(--size);
  color: inherit;
`

export default Select;
