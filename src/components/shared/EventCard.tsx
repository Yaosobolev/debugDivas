import React from 'react';
import { Event } from '@/lib/api';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const genderOptions = [
    { value: 1, label: 'Мужской' },
    { value: 2, label: 'Женский' },
    { value: 3, label: 'Не указан' },
  ];

  const genderLabel = genderOptions.find(option => option.value === event.gender)?.label || 'Мужской и Женский';

  return (
    <div className="flex items-center bg-white rounded-lg p-4 mb-4">
      <div className="flex-shrink-0 w-16 h-16 bg-primary text-white text-center rounded-full flex items-center justify-center">
        <span className="text-lg font-bold">{new Date(event.started_at).toLocaleString().slice(0, 5)}</span>
      </div>
      <div className="ml-4 flex-grow">
        <div className="text-gray-700 font-bold">{new Date(event.started_at).toLocaleString().slice(0, 5)} - {new Date(event.ended_at).toLocaleString().slice(0, 5)}</div>
        <div className="text-gray-900">{event.name}</div>
        <div className="text-gray-500 text-sm">Пол: {genderLabel}</div>
        <div className="text-gray-500 text-sm">Возраст: {event.min_age} - {event.max_age} лет</div>
        <div className="text-gray-500 text-sm">Локация: {event.location}</div>
        <div className="text-gray-500 text-sm">Количество участников: {event.seats}</div>
      </div>
    </div>
  );
};

export default EventCard;