import PageTitle from '@/components/layout/pageTitle';
import React, { useState } from 'react';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

export default function Activities() {
  const [date, setDate] = useState<string | Date | Date[] | null>(null);
  return (
    <>
      <PageTitle title="近期活動" />
      <div className="items-center w-full py-10 text-center card">
        <Calendar
          value={date}
          onChange={(e: CalendarChangeEvent) => setDate(e.value)}
          inline
          showWeek
        />
        <h1 className='mt-5 text-3xl'>本日活動</h1>
        <div className='m-auto mt-5 rounded-lg bg-neutral-900 w-[466px] p-5'>
            沒有活動
        </div>
      </div>
    </>
  );
}
