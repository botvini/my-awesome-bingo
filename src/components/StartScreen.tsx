interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex min-h-full items-center justify-center bg-bg-primary p-4 sm:p-8">
      <div className="w-full max-w-2xl border-4 border-text-primary bg-bg-secondary p-5 sm:p-8 animate-[fade-in_0.25s_ease-out]">
        <div className="mb-8 border-b-4 border-text-primary pb-5 sm:pb-7">
          <h1 className="font-display text-text-primary">Bingo Mixer</h1>
          <p className="mt-3 text-base tracking-wide text-text-secondary sm:text-lg">
            Find your people. Fill the board. Claim the row.
          </p>
        </div>

        <div className="mb-8 border-4 border-text-primary bg-bg-primary p-4 sm:p-5">
          <h2 className="mb-3 text-xl font-display text-text-primary">How to play</h2>
          <ul className="space-y-2 text-left text-sm leading-6 text-text-secondary sm:text-base">
            <li>Find people who match each square prompt.</li>
            <li>Tap the square when you find a match.</li>
            <li>Complete five in a row to win.</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full border-4 border-text-primary bg-accent px-6 py-4 font-display text-xl text-text-primary uppercase tracking-wide active:translate-y-[1px] hover:bg-accent-light"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
