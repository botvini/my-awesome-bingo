import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex min-h-[72px] w-full items-center justify-center border-2 border-text-primary p-2 text-center text-[11px] leading-4 tracking-wide select-none sm:min-h-[88px] sm:p-3 sm:text-xs sm:leading-5';

  const unmarkedClasses =
    'bg-bg-primary text-text-primary hover:bg-bg-tertiary active:translate-y-[1px]';
  const markedClasses =
    'bg-marked text-bg-primary';
  const winningClasses =
    'bg-bingo text-bg-primary';
  const freeSpaceClasses =
    'bg-accent text-text-primary font-bold uppercase';

  const stateClasses = square.isFreeSpace
    ? freeSpaceClasses
    : square.isMarked
      ? isWinning
        ? winningClasses
        : markedClasses
      : unmarkedClasses;

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="break-words hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-1 top-1 text-[10px] font-bold sm:text-xs" aria-hidden="true">
          ✓
        </span>
      )}
    </button>
  );
}
