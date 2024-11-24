import { getEvents } from '@/service/event'
import { useEffect, useState } from 'react'
import { Event } from '@/@types/event'

export const useEvents = (filter: string) => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    // Пропускаем вызов, если фильтр пустой

    async function fetchEvents() {
      try {
        setLoading(true)
        const events = await getEvents(filter)
        console.log('Полученные события:', events)
        setEvents(events)
      } catch (error) {
        console.error('Ошибка при получении событий:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [filter])

  return {
    events,
    loading,
  }
}
