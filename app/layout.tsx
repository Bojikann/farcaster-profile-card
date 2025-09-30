// app/layout.tsx

// Bu dosya, tüm sayfaların temelini oluşturur.
// metadata etiketlerinin yerleştirileceği <html> ve <body>'yi sağlar.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
