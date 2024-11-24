import { useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'
import { useMemo, useState } from 'react'

export interface Filters {
  sport_type: string | undefined
  location: string | undefined
  seats: string | undefined
  gender: Set<string>
  min_age: string | undefined
  max_age: string | undefined
  started_at: string | undefined
  ended_at: string | undefined
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

  // const [sportType, { toggle: toggleSportType }] = useSet(
  //   new Set<string>(searchParams.get('sportType') ? searchParams.get('sportType')?.split(',') : []),
  // )
  const [sport_type, setSportType] = useState<string | undefined>(
    searchParams.get('sport_type') ? searchParams.get('sport_type') : undefined,
  )
  const updateSportType = (value: string | undefined) => {
    setSportType(value)
  }
  const [location, setLocation] = useState<string | undefined>(
    searchParams.get('location') ? searchParams.get('location') : undefined,
  )
  const updateLocation = (value: string | undefined) => {
    setLocation(value)
  }

  // const [location, { toggle: toggleLocation }] = useSet(
  //   new Set<string>(searchParams.get('location') ? searchParams.get('location')?.split(',') : []),
  // )

  const [seats, setSeats] = useState<string | undefined>(
    searchParams.get('seats') ? searchParams.get('seats') : undefined,
  )
  const updateSeats = (value: string) => {
    setSeats(value)
  }
  const [gender, { toggle: toggleSex }] = useSet(
    new Set<string>(searchParams.get('gender') ? searchParams.get('gender') : []),
  )

  const [min_age, setMinAge] = useState<string | undefined>(
    searchParams.get('min_age') ? searchParams.get('min_age') : undefined,
  )
  const updateMinAge = (value: string) => {
    setMinAge(value)
  }

  const [max_age, setMaxAge] = useState<string | undefined>(
    searchParams.get('max_age') ? searchParams.get('max_age') : undefined,
  )
  const updateMaxAge = (value: string) => {
    setMaxAge(value)
  }

  const [started_at, setStartedAt] = useState<string | undefined>(
    searchParams.get('started_at') ? searchParams.get('started_at') : undefined,
  )
  const updateStartedAt = (value: string | undefined) => {
    setStartedAt(value)
  }

  const [ended_at, setEndedAt] = useState<string | undefined>(
    searchParams.get('ended_at') ? searchParams.get('ended_at') : undefined,
  )
  const updateEndedAt = (value: string | undefined) => {
    setEndedAt(value)
  }

  return useMemo(
    () => ({
      sport_type,
      location,
      seats,
      gender,
      min_age,
      max_age,
      started_at,
      ended_at,

      setSportType: updateSportType,
      setLocation: updateLocation,
      setSeats: updateSeats,
      setSex: toggleSex,
      setMinAge: updateMinAge,
      setMaxAge: updateMaxAge,
      setStartedAt: updateStartedAt,
      setEndedAt: updateEndedAt,
    }),
    [sport_type, location, seats, gender, min_age, max_age, started_at, ended_at],
  )
}
