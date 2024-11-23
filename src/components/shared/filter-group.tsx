import { cn } from '@/lib/utils'
import { SelectFilterItem } from './select-filter-item'
import { SelectFilterItemm } from './select-filter-itemm'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
  className?: string
}

export const FilterGroup: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <SelectFilterItem title="Вид спорта" />
      <CheckboxFiltersGroup
        title="Вид спорта"
        name="pizzaTypes"
        className="mt-5"
        items={[
          {
            text: 'Тонкое',
            value: '1',
          },
          {
            text: 'Традиционное',
            value: '2',
          },
          {
            text: 'Традиционное',
            value: '2',
          },
          {
            text: 'Традиционное',
            value: '2',
          },
        ]}
        // onClickCheckbox={filters.setPizzaTypes}
        // selected={filters.pizzaTypes}
      />
      <SelectFilterItemm title="Вид спорта" />
      <SelectFilterItem title="Место проведения" />
      <SelectFilterItem title="Количество участников" />
      <SelectFilterItem title="Пол" />
      <SelectFilterItem title="Возрастная группа" />
      <SelectFilterItem title="Сроки проведения" />
    </div>
  )
}
