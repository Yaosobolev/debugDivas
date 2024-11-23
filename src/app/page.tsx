import { TopBar } from '@/components/shared/top-bar';
import EventCard from '@/components/shared/EventCard';
import { getEvents, Event } from '@/lib/api';

export default async function Home() {
  const events: Event[] = await getEvents();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <TopBar />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}