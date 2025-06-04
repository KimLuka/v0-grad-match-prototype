import { User } from 'lucide-react'
import Link from 'next/link'

import type { UserMenuItem } from '@/components/layout/header'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useToast } from '@/hooks/useToast'

interface UserMenuProps {
  userMenuItems: readonly UserMenuItem[]
}

export default function UserMenu({ userMenuItems }: UserMenuProps) {
  const { toast } = useToast()

  const handleLogout = () => {
    // 로그아웃 로직 (실제로는 API 호출)
    toast({
      title: '로그아웃되었습니다',
      description: '안전하게 로그아웃되었습니다.',
    })
  }

  const handleDeleteAccount = () => {
    // 회원탈퇴 로직 (실제로는 확인 다이얼로그 후 API 호출)
    toast({
      title: '회원탈퇴가 완료되었습니다',
      description: '그동안 이용해주셔서 감사합니다.',
      variant: 'destructive',
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <User className="h-4 w-4" />
          <span className="sr-only">사용자 메뉴 열기</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {userMenuItems.map(item => (
          <DropdownMenuItem key={item.href} asChild>
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>로그아웃</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleDeleteAccount}
          className="text-destructive focus:bg-destructive/10 focus:text-destructive"
        >
          회원탈퇴
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
