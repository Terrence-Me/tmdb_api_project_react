import React from 'react';

import { Loader, Segment } from 'semantic-ui-react';

const Loading = () => {
  return (
    <Segment>
      <Loader active />
      <h3>Loading...</h3>
    </Segment>
  );
};

export default Loading;
