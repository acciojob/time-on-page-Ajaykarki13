

import React, { useState } from 'react';

function Timer() {
    const [time, setTime] = useState(0);
  
     setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    return (
      <h3>You've been on this page for {time} seconds.</h3>
    );
  }

export default Timer;
