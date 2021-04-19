import React from 'react';
import GlobalStyle from './globalStyles';
import { CustomTimeline } from './CustomTimeline';
import 'react-calendar-timeline/lib/Timeline.css'

// import {BigScheduler} from './BigScheduler';

function App() {
  return (
    <>
      <GlobalStyle />
      <CustomTimeline />
      {/* <BigScheduler /> */}
    </>
  );
}

export default App;
