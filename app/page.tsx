// app/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://i.imgur.com/9d26LQ8.png', // Sabit, çalışan bir resim URL'si
    'fc:frame:button:1': 'It Works!',
  },
};

export default function Page() {
  return <h1>Minimal Frame Test</h1>;
}
