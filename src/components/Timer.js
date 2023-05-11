

import React, { useState } from 'react';

function Timer() {
    const [time, setTime] = useState(0);
  
     setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    return (
      <p>You've been on this page for {time} seconds.</p>
    );
  }

export default Timer;
