import PageTitle from '@/components/layout/pageTitle';
import React, { useState } from 'react';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

export default function Activities() {
  const [date, setDate] = useState<string | Date | Date[] | null>(null);
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
            沒有活動
          </div>
        </div>
      </div>
    </>
  );
}
