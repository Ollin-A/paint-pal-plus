import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = { width: 512, height: 512 };

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F5EFE3',
          color: '#1F2E25',
          fontSize: 220,
          fontWeight: 600,
          letterSpacing: '-0.04em',
          fontFamily: 'serif',
        }}
      >
        PPP
      </div>
    ),
    { ...size },
  );
}
