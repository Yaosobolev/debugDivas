'use client' // Указываем, что это Client Component

// import React, { useState } from 'react'
// import EventCard from '@/components/shared/EventCard'
import { Formats } from '@/components/shared/formats'

interface UpcomingEventsProps {
  events: Event[]
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = () => {
  // const [selectedFormat, setSelectedFormat] = useState<string>('close')

  // const today = new Date()
  // const currentWeekEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
  // const nextMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
  // const quarterEnd = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate())
  // const halfYearEnd = new Date(today.getFullYear(), today.getMonth() + 6, today.getDate())

  // const filteredEvents = (format: string) => {
  //   switch (format) {
  //     case 'week':
  //       return events.filter((event) => new Date(event.started_at) < currentWeekEnd)
  //     case 'month':
  //       return events.filter((event) => new Date(event.started_at) < nextMonthEnd)
  //     case 'quarter':
  //       return events.filter((event) => new Date(event.started_at) < quarterEnd)
  //     case 'halfyear':
  //       return events.filter((event) => new Date(event.started_at) < halfYearEnd)
  //     default:
  //       return events
  //   }
  // }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Ближайшие мероприятия</h2>
      <Formats />
      <div className="mt-4">
        {/* {filteredEvents(selectedFormat).map((event) => (
          <EventCard key={event.id} event={event} />
        ))} */}
      </div>
    </div>
  )
}

export default UpcomingEvents
