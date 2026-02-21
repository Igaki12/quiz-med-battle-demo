import { PropsWithChildren } from 'react';

export default function PhoneFrame({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-[420px] rounded-[28px] border border-gild-400/70 bg-ink-800/80 shadow-2xl backdrop-blur">
        <div className="absolute -top-6 left-6 right-6 rounded-full border border-gild-400/80 bg-ink-900/80 px-4 py-1 text-center text-[11px] text-gild-200">
          みんなで早押し！医師国試クイズ
        </div>
        <div className="rounded-[28px] p-5 pt-8">{children}</div>
      </div>
    </div>
  );
}
