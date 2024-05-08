import type { Metadata } from 'next'

//MUỐN ĐỔI TITLE VÀ description hoặc các giá trị tốt cho SEO cho từng trang thì phải tạo bấy nhiêu file layout.tsx
export const metadata: Metadata = {
  title: 'FACEBOOK by Giang',
  description: 'FACEBOOK by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <>
          {children}

  </>       
  )
}
