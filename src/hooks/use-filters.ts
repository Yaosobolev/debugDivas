import { useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'
import { useMemo, useState } from 'react'

export interface Filters {
  sportType: Set<string>
  location: Set<string>
  seats: string | undefined
  sex: Set<string>
  minAge: string | undefined
  maxAge: string | undefined
  startedAt: string | undefined
  endedAt: string | undefined
}

interface ReturnProps extends Filters {
  setSportType: (value: string) => void
  setLocation: (value: string) => void
  setSeats: (name: string) => void
  setSex: (value: string) => void
  setMinAge: (value: string) => void
  setMaxAge: (value: string) => void
  setStartedAt: (value: string | undefined) => void
  setEndedAt: (value: string | undefined) => void
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof Filters, string>

  const [sportType, { toggle: toggleSportType }] = useSet(
    new Set<string>(searchParams.get('sportType') ? searchParams.get('sportType')?.split(',') : []),
  )

  const [location, { toggle: toggleLocation }] = useSet(
    new Set<string>(searchParams.get('location') ? searchParams.get('location')?.split(',') : []),
  )

  const [seats, setSeats] = useState<string | undefined>(
    searchParams.get('seats') ? searchParams.get('seats') : undefined,
  )
  const updateSeats = (value: string) => {
    setSeats(value)
  }
  const [sex, { toggle: toggleSex }] = useSet(
    new Set<string>(searchParams.get('sex') ? searchParams.get('sex') : []),
  )

  const [minAge, setMinAge] = useState<string | undefined>(
    searchParams.get('minAge') ? searchParams.get('minAge') : undefined,
  )
  const updateMinAge = (value: string) => {
    setMinAge(value)
  }

  const [maxAge, setMaxAge] = useState<string | undefined>(
    searchParams.get('maxAge') ? searchParams.get('maxAge') : undefined,
  )
  const updateMaxAge = (value: string) => {
    setMaxAge(value)
  }

  const [startedAt, setStartedAt] = useState<string | undefined>(
    searchParams.get('startedAt') ? searchParams.get('startedAt') : undefined,
  )
  const updateStartedAt = (value: string | undefined) => {
    setStartedAt(value)
  }

  const [endedAt, setEndedAt] = useState<string | undefined>(
    searchParams.get('endedAt') ? searchParams.get('endedAt') : undefined,
  )
  const updateEndedAt = (value: string | undefined) => {
    setEndedAt(value)
  }

  return useMemo(
    () => ({
      sportType,
      location,
      seats,
      sex,
      minAge,
      maxAge,
      startedAt,
      endedAt,

      setSportType: toggleSportType,
      setLocation: toggleLocation,
      setSeats: updateSeats,
      setSex: toggleSex,
      setMinAge: updateMinAge,
      setMaxAge: updateMaxAge,
      setStartedAt: updateStartedAt,
      setEndedAt: updateEndedAt,
    }),
    [sportType, location, seats, sex, minAge, maxAge, startedAt, endedAt],
  )
}
