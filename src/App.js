import React from 'react';
import GlobalStyle from './globalStyles';

import {VisTimeline} from './VisTimeline';

const educationData = {
  label: 'Add Education',
  items: [
    {
      content: "Marketing - UCLA",
      group: 1,
      start: new Date(1997, 6, 15),
      end: new Date(2001, 6, 15),
    },
    {
      content: "Communications - UCLA",
      group: 1,
      start: new Date(1997, 6, 15),
      end: new Date(2001, 6, 15),
    },
  ],
  groups: [
    {
      id:  '1',
      content: "Add Education",
      value: 1,
    }, 
  ]
}

const certificationData = {
  label: 'Add Certificates',
  items: [
    {
      content: "HubSpot Academy",
      group: 3,
      start: new Date(2005, 2, 15),
      end: new Date(2006, 5, 15),
    },
    {
      content: "Google Analytics",
      group: 3,
      start: new Date(2006, 1, 15),
      end: new Date(2007, 6, 15),
    },
    {
      content: "Facebook Blueprint",
      group: 3,
      start: new Date(2008, 1, 15),
      end: new Date(2009, 6, 15),
    },
  ],
  groups: [
    {
      id:  '3',
      content: "Add Certificates",
      value: 3,
    }, 
  ]
}

const experienceData = {
  label: 'Add Experience',
  items: [
    {
      content: "Marketing Intern - Reddit",
      group: 2,
      start: new Date(2006, 11, 15),
      end: new Date(2009, 6, 15),
    },
    {
      content: "Marketing Associate - Airbnb",
      group: 2,
      start: new Date(2008, 4, 15),
      end: new Date(2012, 2, 15),
    },
    {
      content: "Job 1 - Spotify ----- Promotion",
      group: 2,
      start: new Date(2012, 1, 15),
      end: new Date(2021, 4, 15),
    },
  ],
  groups: [
    {
      id:  '2',
      content: "Add Experience",
      value: 2,
    }, 
  ]
}

function App() {
  return (
    <>
      <GlobalStyle />
      <VisTimeline data={educationData}/>
      <VisTimeline data={experienceData} />
      <VisTimeline data={certificationData} />
    </>
  );
}

export default App;
