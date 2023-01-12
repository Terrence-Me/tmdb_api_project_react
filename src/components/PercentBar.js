import React from 'react';
import { Progress, Segment } from 'semantic-ui-react';

import '../styles/styles.css';

const PercentBar = ({ rating }) => {
  let averageRating = rating * 10;

  return (
    <div>
      <Segment inverted id="inverted">
        <Progress
          size="small"
          id="pregress-container"
          percent={averageRating}
          inverted
          color="green"
          progress
        />
      </Segment>
    </div>
  );
};

export default PercentBar;
