import React, {useState} from 'react';
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT, DemoData} from 'react-big-scheduler'
import 'react-big-scheduler/lib/css/style.css'
import moment from 'moment'

import withDragDropContext from './withDndContext'

const nonAgendaCellHeaderTemplateResolver = (schedulerData, item, formattedDateItems, style) => {
  let datetime = schedulerData.localeMoment(item.time);
      let isCurrentDate = false;

      if (schedulerData.viewType === ViewTypes.Day) {
          isCurrentDate = datetime.isSame(new Date(), 'hour');
      }
      else {
          isCurrentDate = datetime.isSame(new Date(), 'day');
      }

      if (isCurrentDate) {
          style.backgroundColor = '#118dea';
          style.color = 'white';
      }

      return (
          <th key={item.time} className={`header3-text`} style={style}>
              {
                  formattedDateItems.map((formattedItem, index) => (
                      <div key={index}
                           dangerouslySetInnerHTML={{__html: formattedItem.replace(/[0-9]/g, '<b>$&</b>')}}/>
                  ))
              }
          </th>
      );
}

export const BigScheduler = withDragDropContext(() => {
  let schedulerData = new SchedulerData(Date.now(), ViewTypes.Year, false, false, {
    calendarPopoverEnabled: false,
    headerEnabled: false,
    dayStartFrom: Date.now(),
    startResizable: false,
    endResizable: false,
    movable: false,
    creatable: false,
  });

  let resources = [
    {
       id: 'r0',
       name: 'Resource0',
       groupOnly: true
    },
    {
       id: 'r1',
       name: 'Resource1'
    },
    {
       id: 'r2',
       name: 'Resource2',
       parentId: 'r0'
    },
    {
       id: 'r3',
       name: 'Resource3',
       parentId: 'r4'
    },
    {
       id: 'r4',
       name: 'Resource4',
       parentId: 'r2'
    },
];

let events = [
  {
       id: 1,
       start: '2017-12-18 09:30:00',
       end: '2017-12-19 23:30:00',
       resourceId: 'r1',
       title: 'I am finished',
       bgColor: '#D9D9D9'
   },
   {
       id: 2,
       start: '2017-12-18 12:30:00',
       end: '2017-12-26 23:30:00',
       resourceId: 'r2',
       title: 'I am not resizable',
       resizable: false
   },
   {
       id: 3,
       start: '2017-12-19 12:30:00',
       end: '2017-12-20 23:30:00',
       resourceId: 'r3',
       title: 'I am not movable',
       movable: false
   },
   {
       id: 4,
       start: '2017-12-19 14:30:00',
       end: '2017-12-20 23:30:00',
       resourceId: 'r1',
       title: 'I am not start-resizable',
       startResizable: false
   },
   {
       id: 5,
       start: '2017-12-19 15:30:00',
       end: '2017-12-20 23:30:00',
       resourceId: 'r2',
       title: 'R2 has recurring tasks every week on Tuesday, Friday',
       rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR',
       bgColor: '#f759ab'
   }
];
  schedulerData.setResources(resources);
  schedulerData.setEvents(events);

  const [viewModel, setViewModel] = useState(schedulerData);

  const prevClick = () => {
    schedulerData.prev();
    schedulerData.setEvents(DemoData.events);

    setViewModel(schedulerData);
  }

  const nextClick = (schedulerData) => {
    schedulerData.next();
    schedulerData.setEvents(DemoData.events);

    setViewModel(schedulerData);
  }

  const onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(DemoData.events);

    setViewModel(schedulerData);
  }

  const onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(DemoData.events);

    setViewModel(schedulerData);
  }

  const eventClicked = (schedulerData, event) => {
    alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
  };

  return (
    <Scheduler
      schedulerData={viewModel}
      prevClick={prevClick}
      nextClick={nextClick}
      onSelectDate={onSelectDate}
      onViewChange={onViewChange}
      eventItemClick={eventClicked}
      nonAgendaCellHeaderTemplateResolver={nonAgendaCellHeaderTemplateResolver}
    />
  )
})