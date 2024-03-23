import { type ClassValue } from 'clsx';

declare module 'zero-cnn' {
    export function cn(...args: ClassValue[]): string;
}
