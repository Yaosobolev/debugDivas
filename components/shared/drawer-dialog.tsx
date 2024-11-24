'use client'

import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useMediaQuery } from '@reactuses/core'

export function DrawerDialog({
  children,
  childrenTrigger,
}: Readonly<{
  children: React.ReactNode
  childrenTrigger: React.ReactNode
}>) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)', false)

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{childrenTrigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Авторизация</DialogTitle>
            {children}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{childrenTrigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Авторизация</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4">{children}</div>
      </DrawerContent>
    </Drawer>
  )
}
