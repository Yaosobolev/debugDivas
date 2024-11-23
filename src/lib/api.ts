import { axiosInstance } from '@/service/instance';

export interface Event {
  id: number;
  ekp_id: string;
  name: string;
  sport_type: string;
  gender: number;
  min_age: number;
  max_age: number;
  location: string;
  started_at: string;
  ended_at: string;
  seats: number;
  created_at: string;
}

export const getEvents = async (): Promise<Event[]> => {
  try {
    const { data } = await axiosInstance.get<Event[]>('/events/events');
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};