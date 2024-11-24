import { axiosInstance } from './instance'

import { Event } from '@/@types/event'

export const getEvents = async (filter: string) => {
  console.log('filter: ', filter)

  const params = new URLSearchParams(filter)

  // Преобразуем started_at и другие параметры даты в секунды
  if (params.has('started_at')) {
    const startedAt = params.get('started_at')
    if (startedAt) {
      params.set('started_at', Math.floor(new Date(startedAt).getTime() / 1000).toString())
    }
  }

  if (params.has('ended_at')) {
    const endedAt = params.get('ended_at')
    if (endedAt) {
      params.set('ended_at', Math.floor(new Date(endedAt).getTime() / 1000).toString())
    }
  }

  const url = `/events/events?${params.toString()}`
  // const url = filter ? `/events/events?${filter}` : '/events/events'

  try {
    const { data } = await axiosInstance.get<Event[]>(url)
    console.log('События:', data)
    return data
  } catch (error) {
    console.error('Ошибка при запросе событий:', error)
    throw error
  }
}
