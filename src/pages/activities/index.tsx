import PageTitle from '@/components/layout/pageTitle';
import React, { useEffect, useState } from 'react';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { IActivity } from './activity';

interface propsList {
  detail: string[];
}

function RenderActList(props: propsList) {
  const { detail } = props;

  if (!detail || !detail.length) {
    return <p>無活動</p>;
  }
  return (
    <>
      {detail.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </>
  );
}

export default function Activities() {
  const [date, setDate] = useState<Date>(null);
  const [activities, setActivities] = useState<Array<IActivity>>();
  const [detail, setDetail] = useState<string[]>([]);

  useEffect(() => {
    const GetActList = async () => {
      const res = await fetch('https://api.scaict.org/events');
      if (!res.ok) throw Error('Fetching Error with GetActList Function.');
      const data = await res.json();
      setActivities(data);
    };
    GetActList();

    setDetail((detail) => []);
    console.log(detail);
    activities?.forEach((v) => {
      const start = new Date(v.date.start),
        end = new Date(v.date.end);
      if (
        start.getDate() <= date.getDate() &&
        date.getDate() <= end.getDate()
      ) {
        setDetail([...detail, v.description]);
      }
    });
  }, [date]);

  return (
    <>
      <div className="w-full h-full m-auto">
        <PageTitle title="近期活動" />
        <div className="flex justify-center gap-6 flex-wrap w-full px-40 py-10 text-center card max-md:p-5">
          <Calendar
            value={date}
            onChange={(e: CalendarChangeEvent) => setDate(e.value)}
            inline
            showWeek
          />
          <div className="m-auto mt-5 rounded-lg bg-neutral-900 max-md:min-w-[100%] w-[466px] p-5">
            <RenderActList detail={detail}></RenderActList>
          </div>
        </div>
      </div>
    </>
  );
}
