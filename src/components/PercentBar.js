import React from 'react';
import { Progress } from 'semantic-ui-react';

const PercentBar = ({ rating }) => {
  let averageRating = rating * 10;

  return (
    <div>
      <div inverted>
        <Progress
          //   size="small"
          id="pregress-container"
          percent={averageRating}
          inverted
          color="green"
          progress
        />
      </div>
    </div>
  );
};

export default PercentBar;
