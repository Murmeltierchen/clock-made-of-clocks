import { Symbol } from '@/types/symbol';

const DECODED_SYMBOLS = {
    ' ': [135, 135],
    '┘': [180, 270],
    '└': [0, 270],
    '┐': [90, 180],
    '┌': [0, 90],
    '-': [0, 180],
    '|': [90, 270],
};

export default function decodeSymbol(symbol: Symbol) {
    return DECODED_SYMBOLS[symbol];
}
