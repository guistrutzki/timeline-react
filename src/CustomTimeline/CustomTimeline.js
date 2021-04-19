import React, {useState, useEffect} from "react";
import moment from "moment";
import faker from "faker";

import Timeline, {
  TimelineHeaders,
  // SidebarHeader,
  // DateHeader,
  CustomHeader
} from "react-calendar-timeline";

// import {generateFakeData} from '../generate-fake-data';

const keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title"
};

const TimelineCard = ({item, itemContext, getItemProps, getResizeProps}) => {
  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
  // const backgroundColor = itemContext.selected ? (itemContext.dragging ? "red" : item.selectedBgColor) : item.bgColor;
  // const borderColor = itemContext.resizing ? "red" : item.color;

  return (
    <div
      {...getItemProps({
        style: {
          backgroundColor: '#FFFFFF',
          color: '##292929',
          borderColor: '#A99DE0',
          borderStyle: "solid",
          borderWidth: 2,
          borderRadius: 10,
          borderLeftWidth: itemContext.selected ? 3 : 2,
          borderRightWidth: itemContext.selected ? 3 : 2,
          height: 50,
        },
        onMouseDown: () => {
          console.log("on item click", item);
        }
      })}
    >
      {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

      <div
        style={{
          height: itemContext.dimensions.height,
          overflow: "hidden",
          paddingLeft: 3,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}
      >
        {itemContext.title}
      </div>

      {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
    </div>
  );
}

export const CustomTimeline = () => {
  const [groups, setGroups] = useState([]);
  const [items, setItems] = useState([]);

  const defaultTimeStart = moment()
      .startOf("day")
      .toDate();

  const defaultTimeEnd = moment()
    .startOf("day")
    .add(1, "day")
    .toDate();

  useEffect(() => {
    // const fakeData = generateFakeData();

    const timelineGroups = [
      {
        id: '1',
        title: 'Education',
        rightTitle: '',
        bgColor: '#ff0000'
      },
      {
        id: '3',
        title: 'Experience',
        rightTitle: '',
        bgColor: '#ff00ff'
      },
      {
        id: '2',
        title: 'Certificate',
        rightTitle: '',
        bgColor: '#00ff00'
      }
    ]

    const startDate =
      faker.date.recent(30).valueOf() + 30 * 0.3 * 86400 * 1000;
    const startValue =
      Math.floor(moment(startDate).valueOf() / 10000000) * 10000000;

    const endValue = moment(
      startDate + 0.5 * 365.24 * 86400 * 1000
    ).valueOf();

    const endValue2 = moment(
      startDate + 1 * 365.24 * 86400 * 1000
    ).valueOf();

    const timelineItems = [
      {
        id: "1",
        group: "1",
        title: "Marketing - UCLA",
        start: startValue,
        end: endValue,
        canMove: false,
        canResize: false,
        className:
          moment(startDate).day() === 6 || moment(startDate).day() === 0
            ? "item-weekend"
            : "",
        bgColor: "#ff00ff",
        selectedBgColor: "#ffffff",
        color: "#000",
      },
      {
        id: "2",
        group: "1",
        title: "Communications - UCLA",
        start: startValue,
        end: endValue,
        canMove: false,
        canResize: false,
        className:
          moment(startDate).day() === 6 || moment(startDate).day() === 0
            ? "item-weekend"
            : "",
        bgColor: "#ff00ff",
        selectedBgColor: "#ffffff",
        color: "#000",
      },
      {
        id: "3",
        group: "3",
        title: "MBA - Stanford",
        start: startValue,
        end: endValue2,
        canMove: false,
        canResize: false,
        className:
          moment(startDate).day() === 6 || moment(startDate).day() === 0
            ? "item-weekend"
            : "",
        bgColor: "#ff00ff",
        selectedBgColor: "#ffffff",
        color: "#000",
      }
    ]

    setGroups(timelineGroups);
    setItems(timelineItems);
  }, [])

  const handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const group = groups[newGroupOrder];

    setItems({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id
            })
          : item
      )
    });

    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  const handleItemResize = (itemId, time, edge) => {
    setItems({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: edge === "left" ? time : item.start,
              end: edge === "left" ? item.end : time
            })
          : item
      )
    });

    console.log("Resized", itemId, time, edge);
  };

  return (
    <Timeline
      timeSteps={{
        second: 0,
        minute: 0,
        hour: 0,
        day: 0,
        month: 0,
        year: 1
      }}
      minZoom={1 * 365.24 * 86400 * 1000}
      maxZoom={1 * 365.24 * 86400 * 1000}
      onZoom={(e) => console.log(e)}
      groups={groups}
      items={items}
      keys={keys}
      itemTouchSendsClick={false}
      stackItems
      itemHeightRatio={0.75}
      showCursorLine
      canMove={false}
      canResize={false}
      defaultTimeStart={defaultTimeStart}
      defaultTimeEnd={defaultTimeEnd}
      itemRenderer={(props) => <TimelineCard {...props} />}
      onItemMove={handleItemMove}
      onItemResize={handleItemResize}
    >
      <TimelineHeaders calendarHeaderStyle={{backgroundColor: 'red'}}>
    <CustomHeader headerData={{someData: 'data'}} unit="year" >
      {({
        headerContext: { intervals },
        getRootProps,
        getIntervalProps,
        showPeriod,
        data,
        timelineContext
      }) => {
        return (
          <div {...getRootProps()}>
            {intervals.map(interval => {
              const intervalStyle = {
                lineHeight: '30px',
                textAlign: 'center',
                borderLeft: '1px solid black',
                cursor: 'pointer',
                backgroundColor: 'Turquoise',
                color: 'white'
              }
                return (
                  <div
                    onClick={() => {
                      showPeriod(interval.startTime, interval.endTime)
                    }}
                    {...getIntervalProps({
                      interval,
                      style: intervalStyle
                    })}
                  >
                    <div className="sticky">
                      {interval.startTime.format('YYYY')}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        }}
      </CustomHeader>
      </TimelineHeaders>
    </Timeline>
  )
}
