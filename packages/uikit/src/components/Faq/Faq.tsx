import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 300px;
  background-color: cyan;
`;

type Props = {
  title: string;
};

const Faq: FunctionComponent<Props> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return <StyledContainer>
    {title}

    <button onClick={() => setExpanded(!expanded)}>{expanded ? 'collapse' : 'expand'}</button>

    {expanded && <>{children}</>}
  </StyledContainer>;
};

export default Faq;
