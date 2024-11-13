import './globals.css';

export const metadata = {
  title: 'Covey Tg Bot',
  description: 'A Telegram bot project showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}