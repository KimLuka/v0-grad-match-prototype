import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'

export default function AuthButtons() {
  const isMobile = useIsMobile()

  return (
    <>
      <Button variant="ghost" size="sm" asChild>
        <Link href="/auth/login">로그인</Link>
      </Button>
      {!isMobile && (
        <Button variant="ghost" size="sm" asChild>
          <Link href="/auth/register">회원가입</Link>
        </Button>
      )}
    </>
  )
}
