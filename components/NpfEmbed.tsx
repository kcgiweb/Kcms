import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const WIDGET_ID = '91d4384119c7df02dd58b03283ed6f37';
const IFRAME_SRC = `https://widgets.in4.nopaperforms.com/register?&r=&q=&w=${WIDGET_ID}&m=&cu=`;

interface NpfEmbedProps {
  height?: string;
  className?: string;
}

const NpfEmbed: React.FC<NpfEmbedProps> = ({ height = '520px', className = '' }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${className}`} style={{ minHeight: height }}>
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/90 backdrop-blur-xs z-10">
          <Loader2 className="w-9 h-9 text-primary animate-spin mb-2" />
          <span className="text-sm font-bold text-primary">Loading Admission Form...</span>
          <span className="text-xs text-neutralText/60 mt-1">Connecting to KCMS Admissions Desk</span>
        </div>
      )}
      <iframe
        src={IFRAME_SRC}
        width="100%"
        height={height}
        onLoad={() => setLoading(false)}
        className="w-full border-none rounded-2xl"
        title="KCMS Admission Enquiry Form"
      />
    </div>
  );
};

export default NpfEmbed;
