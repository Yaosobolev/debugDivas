import { useEffect, useRef } from 'react'
import qs from 'qs'
import { useRouter } from 'next/navigation'
import { Filters } from './use-filters'

export const useQueryFilters = (filters: Filters) => {
  const isMounted = useRef(false)
  const router = useRouter()
  useEffect(() => {
    if (isMounted.current) {
      const params = {
        sport_type: filters.sport_type,
        location: filters.location,
        seats: filters.seats,
        gender: Array.from(filters.gender),
        min_age: filters.min_age,
        max_age: filters.max_age,
        started_at: filters.started_at,
        ended_at: filters.ended_at,
      }

      const query = qs.stringify(params, {
        arrayFormat: 'repeat',
      })
      router.push(`?${query}`, {
        scroll: false,
      })
    }
    isMounted.current = true
  }, [filters])
}
