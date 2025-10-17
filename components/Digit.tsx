import { Symbol } from '@/types/symbol';

import decodeSymbol from '@/utils/decodeSymbol';
import encodeNumber from '@/utils/encodeNumber';
import SmallClock from './SmallClock';

type DigitProps = {
    children: number;
};

export default function Digit({ children }: DigitProps) {
    const encodedNumber = encodeNumber(children);

    return (
        <div className="grid grid-cols-4 grid-rows-6 gap-[0.1vh] w-[min(25vh,25vw)]">
            {encodedNumber.map((encodedNumberRow: Symbol[], indexRow: number) =>
                encodedNumberRow.map((symbol: Symbol, indexColumn: number) => (
                    <SmallClock key={`${indexRow} - ${indexColumn}`}>{decodeSymbol(symbol)}</SmallClock>
                )),
            )}
        </div>
    );
}
