interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 animate-[fade-in_0.15s_ease-out]">
      <div className="w-full max-w-sm border-4 border-text-primary bg-bg-primary p-6 text-center animate-[scale-in_0.2s_ease-out] sm:p-8">
        <div className="mx-auto mb-4 h-2 w-20 bg-bingo" aria-hidden="true"></div>
        <h2 className="mb-2 font-display text-4xl text-text-primary">BINGO</h2>
        <p className="mb-6 text-base text-text-secondary">You completed a line.</p>

        <button
          onClick={onDismiss}
          className="w-full border-4 border-text-primary bg-text-primary px-6 py-3 font-display text-lg uppercase tracking-wide text-bg-primary active:translate-y-[1px] hover:bg-text-secondary"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
