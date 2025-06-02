import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { createPortal } from 'react-dom'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import ResetPassword from '@/components/domain/profile/reset-password'

export default function AccountSettings({ userEmail }: { userEmail: string }) {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)
  const router = useRouter()

  const handleDeleteAccount = async () => {
    try {
      // TODO: 회원탈퇴 API 호출
      router.push('/')
    } catch (error) {
      console.error('회원탈퇴 실패:', error)
    } finally {
      setShowDeleteAlert(false)
    }
  }

  const handleLogout = () => {
    // TODO: 로그아웃 처리 (토큰 제거 등)
    router.push('/')
  }

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>계정 관리</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[100px_1fr] sm:gap-8">
              <h2 className="text-sm">이메일</h2>
              <p className="truncate text-sm text-muted-foreground">{userEmail}</p>
            </div>
            <ResetPassword />
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1 space-y-1">
                <h2 className="block truncate text-sm">알림</h2>
                <p className="block truncate text-xs text-muted-foreground">
                  모집공고 및 매칭 상태 알림 받기
                </p>
              </div>
              <Switch id="newsletter" className="ml-4 flex-shrink-0" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4 flex justify-end gap-2">
        <Button
          variant="secondary"
          className="rounded-full text-muted-foreground"
          onClick={() => setShowDeleteAlert(true)}
        >
          회원탈퇴
        </Button>
        <Button
          variant="secondary"
          className="rounded-full text-muted-foreground"
          onClick={handleLogout}
        >
          로그아웃
        </Button>
      </div>

      {showDeleteAlert &&
        createPortal(
          <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>탈퇴하시겠습니까?</AlertDialogTitle>
                <AlertDialogDescription>
                  회원님의 정보가 영구적으로 삭제됩니다.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setShowDeleteAlert(false)}>
                  취소
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteAccount}>회원탈퇴</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>,
          document.body
        )}
    </>
  )
}
