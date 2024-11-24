import { cn } from '@/lib/utils'
import { Container } from './container'
import { Formats } from './formats'
import { Filters } from './filters'
import { Suspense } from 'react'

interface Props {
  className?: string
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      {' '}
      <Container className="flex items-center justify-between  px-1">
        <Suspense fallback={<div>Loading...</div>}>
          <Filters />
        </Suspense>
        <Formats />
      </Container>
    </div>
  )
}
