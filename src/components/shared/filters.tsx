'use client'

import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger, Button } from '@/components/ui'
import { FilterGroup } from './filter-group'
import { useState } from 'react'
import { useEvents } from '@/hooks/use-events'

export const Filters: React.FC = () => {
  const [avalible, setAvalible] = useState<boolean>(true)
  const { events, loading } = useEvents()
  console.log('events: ', events)

  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="default">Фильтры</Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <FilterGroup onAvalible={setAvalible} />
          <SheetFooter>
            <SheetClose asChild>
              {avalible && (
                <Button className="mr-auto mt-4" type="submit">
                  Найти
                </Button>
              )}
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
