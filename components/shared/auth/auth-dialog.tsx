'use client'

import * as React from 'react'
import { DrawerDialog } from '../drawer-dialog'
import { SignInForm } from './sign-in-form'
import { SignUpForm } from './sign-up-form'
import { Button } from '@/components/ui/button'

export function AuthDialog() {
  const [registration, setRegistration] = React.useState(false)

  if (registration) {
    return (
      <DrawerDialog childrenTrigger={<Button>Войти</Button>}>
        <SignUpForm setRegistration={setRegistration} />
      </DrawerDialog>
    )
  }

  return (
    <DrawerDialog childrenTrigger={<Button>Войти</Button>}>
      <SignInForm setRegistration={setRegistration} />
    </DrawerDialog>
  )
}
