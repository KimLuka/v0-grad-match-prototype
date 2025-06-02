import { ClipboardList, LayoutDashboard, LogOut, Edit, Heart, Settings, User } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

interface User {
  name: string
  email: string
  avatar: string
  role: 'applicant' | 'professor'
}

interface ProfileMenuProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  userRole: string
  setUserRole: (role: string) => void
  user: User
}

interface MenuItem {
  id: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

const menuConfig = {
  applicant: [
    { id: 'profile', icon: User, label: '내 프로필' },
    { id: 'applications', icon: LayoutDashboard, label: '지원 현황' },
    { id: 'saved', icon: Heart, label: '스크랩' },
    { id: 'settings', icon: Settings, label: '설정' },
  ],
  professor: [
    { id: 'profile', icon: User, label: '내 프로필' },
    { id: 'applications', icon: ClipboardList, label: '평가' },
    { id: 'saved', icon: Heart, label: '스크랩' },
    { id: 'settings', icon: Settings, label: '설정' },
  ],
} as const

export default function ProfileMenu({
  activeTab,
  setActiveTab,
  userRole,
  setUserRole,
  user,
}: ProfileMenuProps) {
  const currentMenu = menuConfig[userRole as keyof typeof menuConfig] || menuConfig.applicant

  return (
    <section className="md:w-1/4">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-16 w-16 md:h-24 md:w-24">
              <AvatarImage
                src={user.avatar || '/placeholder.svg?height=100&width=100'}
                alt={user.name}
              />
              <AvatarFallback>
                <User className="h-8 w-8 text-muted-foreground md:h-10 md:w-10" />
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h2 className="text-xl font-bold">
                {user.name} {user.role !== 'applicant' && '교수'}
              </h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>

            {/* Toggle for demo purposes - would not exist in real app */}
            <div className="flex items-center space-x-2 pt-2">
              <Button
                variant="ghost"
                size="sm"
                className={userRole === 'applicant' ? 'bg-primary/10' : ''}
                onClick={() => setUserRole('applicant')}
              >
                지원자 뷰
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={userRole === 'professor' ? 'bg-primary/10' : ''}
                onClick={() => setUserRole('professor')}
              >
                교수 뷰
              </Button>
            </div>
          </div>
          <Separator className="my-6" />
          <nav className="flex flex-col space-y-1">
            {currentMenu.map(({ id, icon: Icon, label }) => (
              <Button
                key={id}
                variant={activeTab === id ? 'secondary' : 'ghost'}
                className="justify-start"
                onClick={() => setActiveTab(id)}
              >
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </Button>
            ))}
          </nav>
        </CardContent>
      </Card>
    </section>
  )
}
