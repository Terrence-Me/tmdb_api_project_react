import React from 'react';

import { Message } from 'semantic-ui-react';

const NoSearchResults = () => {
  return (
    <Message negative>
      <Message.Header>
        We're sorry, looks like we're unable to find any matches
      </Message.Header>
      <p>Try your search again or search another movie</p>
    </Message>
  );
};

export default NoSearchResults;
