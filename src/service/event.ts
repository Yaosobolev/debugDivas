import { axiosInstance } from './instance'

export const getEvents = async () => {
  const { data } = await axiosInstance.get<Event[]>('/events/events')

  return data
}
