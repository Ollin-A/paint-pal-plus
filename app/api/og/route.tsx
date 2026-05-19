import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

const FRAUNCES_URL =
  'https://fonts.gstatic.com/s/fraunces/v32/6NUh8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk.woff2';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') ?? 'Paint Pal Plus';
  const subtitle =
    searchParams.get('subtitle') ?? 'Painting houses in Yamhill County, Oregon';

  const fraunces = await fetch(FRAUNCES_URL).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#F5EFE3',
          color: '#1F2E25',
          fontFamily: 'Fraunces',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: 4,
            textTransform: 'uppercase',
            opacity: 0.55,
          }}
        >
          Paint Pal Plus · Yamhill County, Oregon
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '1000px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 88,
              lineHeight: 1.05,
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                display: 'flex',
                fontSize: 30,
                lineHeight: 1.4,
                opacity: 0.7,
                marginTop: 24,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { color: '#94A48E', label: '01 sage', textColor: '#1F2E25' },
            { color: '#B98839', label: '02 ochre', textColor: '#3D2A0E' },
            { color: '#A55E3F', label: '03 clay', textColor: '#3D1E10' },
            { color: '#1F2E25', label: '04 evergreen', textColor: '#F5EFE3' },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: c.color,
                color: c.textColor,
                fontSize: 18,
                letterSpacing: 2,
                textTransform: 'uppercase',
                padding: '10px 22px',
                borderRadius: 4,
              }}
            >
              {c.label}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Fraunces', data: fraunces, style: 'normal', weight: 400 },
      ],
    },
  );
}
