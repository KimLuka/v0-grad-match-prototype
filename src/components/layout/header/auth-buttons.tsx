import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'

export default function AuthButtons() {
  const isMobile = useIsMobile()

  return (
    <>
      <Button variant="outline" asChild>
        <Link href="/login">로그인</Link>
      </Button>
      {!isMobile && (
        <Button asChild>
          <Link href="/signup">회원가입</Link>
        </Button>
      )}
    </>
  )
}
