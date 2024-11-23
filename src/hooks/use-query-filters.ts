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
        sportType: Array.from(filters.sportType),
        location: Array.from(filters.location),
        seats: filters.seats,
        sex: Array.from(filters.sex),
        minAge: filters.minAge,
        maxAge: filters.maxAge,
        startedAt: filters.startedAt,
        endedAt: filters.endedAt,
      }

      const query = qs.stringify(params, {
        arrayFormat: 'comma',
      })
      router.push(`?${query}`, {
        scroll: false,
      })
    }
    isMounted.current = true
  }, [filters])
}
