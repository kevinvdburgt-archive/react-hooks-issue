import React from 'react';
import { NextPage } from 'next';
import { Faq } from '@react-hooks-issue/uikit';

const Index: NextPage = () => {
  return <div>
    <Faq title="Hello">
      World
    </Faq>
  </div>;
};

export default Index;
