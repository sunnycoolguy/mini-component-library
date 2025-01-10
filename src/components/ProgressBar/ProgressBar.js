/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small' : {
    '--height' : '8px',
    '--padding' : '0px',
    '--radius' : '4px'
  },
  'medium' : {
    '--height' : '12px',
    '--padding' : '0px',
    '--radius' : '4px'
  },
  'large' : {
    '--height' : '16px',
    '--padding' : '4px',
    '--radius' : '8px'
  },
}


const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (<>
    <VisuallyHidden>Progress Bar</VisuallyHidden>
    <ProgressBarContainer role='progressbar' aria-valuenow={`${value}`} style={styles}>
      <ProgressBarValue value={value}/>
    </ProgressBarContainer>
  </>);
};


const ProgressBarContainer = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressBarValue = styled.div`
  height: var(--height);
  background-color: ${COLORS.primary};
  width: ${props => props.value}%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${props => (props.value / 100) * 4}px;
  border-bottom-right-radius: ${props => (props.value / 100) * 4}px;
`;

export default ProgressBar;
