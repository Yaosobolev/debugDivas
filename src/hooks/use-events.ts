import { getEvents } from '@/service/event'
import { useEffect, useState } from 'react'

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true)
        const events = await getEvents()
        setEvents(events)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return {
    events,
    loading,
  }
}
