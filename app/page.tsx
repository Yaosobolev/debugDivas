'use client'

import { TopBar } from '@/components/shared/top-bar'
import EventCard from '@/components/shared/EventCard'
// import UpcomingEvents from '@/components/shared/UpcomingEvents'

import { useSearchParams } from 'next/navigation'
import { useEvents } from '@/hooks/use-events'
import { Suspense } from 'react'

export default function Home() {
  // const events: Event[] = await getEvents();
  const searchParams = useSearchParams()
  const search = searchParams.toString()

  const { events } = useEvents(search)
  console.log('events: ', events)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-gray-100 p-4">
        <TopBar />
        {/* <UpcomingEvents events={events}/> */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((item, index) => (
            <EventCard key={index} event={item} />
          ))}
        </div>
      </div>
    </Suspense>
  )
}
