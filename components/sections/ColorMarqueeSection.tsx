import ColorMarquee from '@/components/ui/ColorMarquee';
import { homeCopy } from '@/lib/copy';

export default function ColorMarqueeSection() {
  return <ColorMarquee items={homeCopy.marqueeColors} />;
}
