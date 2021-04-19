import React from 'react';
import GlobalStyle from './globalStyles';
import { CustomTimeline } from './CustomTimeline';
import 'react-calendar-timeline/lib/Timeline.css'

function App() {
  return (
    <>
      <GlobalStyle />
      <CustomTimeline />
    </>
  );
}

export default App;
