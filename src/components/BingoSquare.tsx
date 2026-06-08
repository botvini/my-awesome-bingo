import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex aspect-square min-h-0 w-full touch-manipulation items-center justify-center overflow-hidden border-2 border-text-primary p-1.5 text-center text-[10px] leading-[1.2] tracking-wide select-none sm:p-3 sm:text-xs sm:leading-5';

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
      type="button"
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="pointer-events-none break-words hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-1 top-1 text-[10px] font-bold sm:text-xs" aria-hidden="true">
          ✓
        </span>
      )}
    </button>
  );
}
