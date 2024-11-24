'use client'

import { cn } from '@/lib/utils'
import { useQueryFilters } from '@/hooks/use-query-filters'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { useFilters } from '@/hooks/use-filters'
import { Input } from '../ui'
import { useEffect } from 'react'

interface Props {
  className?: string
  onAvalible: (value: boolean) => void
}

export const FilterGroup: React.FC<Props> = ({ className, onAvalible }) => {
  const filters = useFilters()
  useQueryFilters(filters)

  useEffect(() => {
    if (
      filters.max_age !== undefined &&
      filters.min_age !== undefined &&
      filters.max_age < filters.min_age
    ) {
      onAvalible(false)
    }
    if (
      filters.ended_at !== undefined &&
      filters.started_at !== undefined &&
      new Date(filters.ended_at).getTime() < new Date(filters.started_at).getTime()
    ) {
      onAvalible(false)
    }
  }, [filters])
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {/* ,пробел */}
      {/* <CheckboxFiltersGroup
        title="Вид спорта"
        name="pizzaTypes"
        className="mt-5"
        items={[
          {
            text: 'Футбол',
            value: '1',
          },
          {
            text: 'Баскетбол',
            value: '2',
          },
          {
            text: 'Волейбол',
            value: '3',
          },
          {
            text: 'Ганбол',
            value: '4',
          },
          {
            text: 'Лыжи',
            value: '5',
          },
          {
            text: 'Бег',
            value: '6',
          },
        ]}
        onClickCheckbox={filters.setSportType}
        selected={filters.sportType}
      />
      <CheckboxFiltersGroup
        title="Место проведения"
        name="pizzaTypes"
        className="mt-5 "
        items={[
          {
            text: 'РОССИЯ СМОЛЕНСКАЯ ОБЛАСТЬ, г. Смоленск',
            value: '1',
          },
          {
            text: 'РОССИЯ САМАРСКАЯ ОБЛАСТЬ, г. Тольятти',
            value: '2',
          },
        ]}
        onClickCheckbox={filters.setLocation}
        selected={filters.location}
      /> */}
      {/* инпут вид спорта */}
      <div className="mt-5">
        <p className="font-bold mb-3">Вид спорта</p>
        <Input
          type="string"
          onChange={(e) => filters.setSportType(e.target.value)}
          value={filters.sport_type === '' ? '' : filters.sport_type}
        />
      </div>
      {/* инпут место проведения */}
      <div className="mt-5">
        <p className="font-bold mb-3">Место проведения</p>
        <Input
          type="string"
          onChange={(e) => filters.setLocation(e.target.value)}
          value={filters.location === '' ? '' : filters.location}
        />
      </div>

      {/* инпут кол-во участников */}
      <div className="mt-5">
        <p className="font-bold mb-3">Количество участников</p>
        <Input
          type="number"
          onChange={(e) => filters.setSeats(e.target.value)}
          value={filters.seats === '' ? '' : filters.seats}
        />
      </div>

      <CheckboxFiltersGroup
        title="Пол"
        name="pizzaTypes"
        className="mt-5"
        items={[
          {
            text: 'Мужской',
            value: '1',
          },
          {
            text: 'Женский',
            value: '2',
          },
        ]}
        onClickCheckbox={filters.setSex}
        selected={filters.gender}
      />
      {/* Инпут мин макс Возрастная группа*/}
      <div className="mt-5">
        <p className="font-bold mb-3">Возрастная группа</p>
        <div className="flex gap-2">
          <Input
            type="number"
            onChange={(e) => (filters.setMinAge(e.target.value), onAvalible(true))}
            placeholder="от"
            value={filters.min_age === '' ? '' : filters.min_age || ''}
          />
          <Input
            type="number"
            onChange={(e) => (filters.setMaxAge(e.target.value), onAvalible(true))}
            placeholder="до"
            value={filters.max_age === '' ? '' : filters.max_age || ''}
          />
        </div>
        {filters.min_age !== undefined &&
          filters.max_age !== undefined &&
          filters.max_age < filters.min_age && (
            <>
              {/* {onAvalible(false)} */}
              <p className="text-red-500">
                Минимальный возвраст не может быть больше максимального
              </p>
            </>
          )}
      </div>

      {/* Инпут мин макс Сроки проведения*/}
      <div className="mt-5">
        <p className="font-bold mb-3">Сроки проведения</p>
        <div className="flex gap-2">
          <Input
            type="date"
            onChange={(e) => (filters.setStartedAt(e.target.value), onAvalible(true))}
            placeholder="с"
            value={filters.started_at || ''}
          />
          <Input
            type="date"
            onChange={(e) => (filters.setEndedAt(e.target.value), onAvalible(true))}
            placeholder="по"
            value={filters.ended_at || ''}
          />
        </div>
        {filters.ended_at !== undefined &&
          filters.started_at !== undefined &&
          new Date(filters.ended_at).getTime() < new Date(filters.started_at).getTime() && (
            <>
              <p className="text-red-500">Дата окончания не может быть раньше даты начала</p>
            </>
          )}
      </div>
    </div>
  )
}
