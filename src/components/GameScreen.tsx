import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex min-h-full flex-col bg-bg-primary">
      <header className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b-4 border-text-primary bg-bg-secondary px-3 py-3 sm:px-5">
        <button
          onClick={onReset}
          className="border-2 border-text-primary bg-bg-primary px-3 py-2 text-sm uppercase tracking-wide text-text-primary active:translate-y-[1px] hover:bg-bg-tertiary"
        >
          Back
        </button>
        <h1 className="text-center text-lg font-display text-text-primary sm:text-2xl">Bingo Mixer</h1>
        <div className="h-1 w-12 bg-text-primary sm:w-16" aria-hidden="true"></div>
      </header>

      <p className="border-b-2 border-text-primary bg-bg-primary px-4 py-3 text-center text-sm leading-6 text-text-secondary sm:text-base">
        Tap a square when you find someone who matches it.
      </p>

      {hasBingo && (
        <div className="border-b-4 border-text-primary bg-bingo px-4 py-3 text-center font-display text-sm uppercase tracking-wider text-bg-primary sm:text-base">
          Bingo! You got a line.
        </div>
      )}

      <div className="flex flex-1 items-center justify-center p-3 sm:p-5">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
