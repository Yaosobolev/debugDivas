import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bell } from 'lucide-react'
import Link from 'next/link'
import { AuthDialog } from '@/components/shared/auth'
interface Props {
  className?: string
}

export const Header: React.FC<Props> = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center gap-4 py-8">
        <div>
          <Link href="/">
            <Image src="/logo-dark.png" alt="logo" width={216} height={29} />
          </Link>
        </div>

        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`} href="">
                  Главная
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex-1">
          <Input
            className="outline-none border-none shadow-none rounded-full bg-gray-100"
            placeholder="Поиск..."
          />
        </div>

        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Bell />
              </Button>
            </PopoverTrigger>
            <PopoverContent>asdфыв</PopoverContent>
          </Popover>
        </div>

        <div>
          <AuthDialog />
        </div>
      </div>
    </header>
  )
}
