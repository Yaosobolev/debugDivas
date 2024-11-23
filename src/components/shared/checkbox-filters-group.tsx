'use client'

import { useState } from 'react'
import { Input } from '../ui/input'
import { Skeleton } from '../ui/skeleton'
import { FilterCheckbox, FilterChecboxProps } from './filter-checkbox'

type Item = FilterChecboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  loading?: boolean
  searchInputPlaceholder?: string
  onClickCheckbox?: (id: string) => void
  // defaultValue?: string[];
  selected?: Set<string>
  className?: string
  name?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  loading,
  onClickCheckbox,
  selected,
  name,
  // defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const onChangeIunput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />)}
      </div>
    )
  }
  const list = showAll
    ? items.filter((item) =>
        item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
      )
    : (defaultItems || items).slice(0, limit)

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
            onChange={onChangeIunput}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            name={name}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>{' '}
        </div>
      )}
    </div>
  )
}
