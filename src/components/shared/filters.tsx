import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  Button,
} from '@/components/ui'
import { FilterGroup } from './filter-group'

export const Filters: React.FC = () => {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="default">Фильтры</Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <FilterGroup />
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
