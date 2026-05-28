import './globals.css'

export const metadata = {
  title: 'IBCL Amazônia',
  description: 'Instituto Brasileiro de Conservação Linguística na Amazônia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
