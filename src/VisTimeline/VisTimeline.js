import React, { useRef } from 'react'
import Timeline from 'react-vis-timeline-2'
import ReactDOM from 'react-dom';

const TimelineCardTemplate = ({data}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div style={{width: 20, height: 20, borderRadius: 10, backgroundColor: '#fff000'}}></div>
      <span style={{display: 'block', marginLeft: 10}}>{data?.content}</span>
    </div>
  )
}

const TimelineGroupTemplate = ({data}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div style={{width: 20, height: 20, borderRadius: 10, backgroundColor: '#ff00ff'}}></div>
      <span style={{display: 'block', marginLeft: 10, fontSize: 14, color: '#6F5CCD'}}>{data?.content}</span>
    </div>
  )
}

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
    width: 1000,
    height: 250,
    orientation: {
      axis: "top",
      item: "bottom",
    },
    timeAxis: {scale: 'year', step: 1},
    margin: {
      item: {
        vertical: 5,
      },
    },
    verticalScroll: false,
    horizontalScroll: true,
    type: "range",
    zoomable: false,
    zoomMin: tenYearsInMS,
    zoomMax: tenYearsInMS,
    showCurrentTime: false,
    editable: false,
    onInitialDrawComplete: () =>  timelineRef.current.timeline.redraw(),
    template: (item, element, data) => {
      if (!item || !data) {
        return;
      }
  
      return ReactDOM.createPortal(
        ReactDOM.render(<TimelineCardTemplate data={data} />, element),
        element,
      );
    },
    groupTemplate: (item, element, data) => {
      console.log(item, data, 'aiaia');

      if (!item) {
        return;
      }

      return ReactDOM.createPortal(
        ReactDOM.render(<TimelineGroupTemplate data={item} />, element),
        element,
      );
    },
  };

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