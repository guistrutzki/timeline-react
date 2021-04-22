import React from 'react'
import Timeline from 'react-vis-timeline-2'

export const VisTimeline = ({ data }) => {
  const selectHandler = (props) => {
    console.log("selected");
    console.log(props);
  }

  const options = {
    stack: true,
    autoResize: true,
    width: '80vw',
    height: 250,
    orientation: {
      axis: "top",
      item: "bottom",
    },
    timeAxis: {scale: 'year', step: 1},
    verticalScroll: false,
    horizontalScroll: true,
    type: "range",
    zoomable: false,
    zoomMin: 252455616000, // 10 years in MS
    zoomMax: 252455616000,
    showCurrentTime: false,
    editable: false,
    startDate: new Date(2010, 11, 15),
    endDate: new Date(2021, 11, 15)
  };

  return (
    <Timeline
      selectHandler={selectHandler}
      options={options}
      initialItems={data?.items || []}
      initialGroups={data?.groups || []}
    />
  )
}