import React, { useRef, useEffect } from 'react'
import Timeline from 'react-vis-timeline-2'

export const VisTimeline = ({ data }) => {
  const timelineRef = useRef(null);

  const selectHandler = (props) => {
    console.log("selected");
    console.log(props);
  }

  const tenYearsInMS = 252455616000;

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
    margin: {
      item: {
        vertical: 5,
      }
    },
    verticalScroll: false,
    horizontalScroll: true,
    type: "range",
    zoomable: false,
    zoomMin: tenYearsInMS,
    zoomMax: tenYearsInMS,
    showCurrentTime: false,
    editable: false,
  };

  useEffect(() => {
    if (!timelineRef.current) return;

    timelineRef.current.timeline.redraw();

  }, [timelineRef])

  return (
    <Timeline
      ref={timelineRef}
      selectHandler={selectHandler}
      options={options}
      initialItems={data?.items || []}
      initialGroups={data?.groups || []}
    />
  )
}