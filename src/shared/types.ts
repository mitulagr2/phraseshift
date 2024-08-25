/**
 * Metadata associated with each script word:
 * - word: string
 * - start_time: number
 * - duration: number
 */
export interface WordData {
  word: string;
  start_time: number;
  duration: number;
}

/**
 * Edit word modal form action types:
 * - SINGLE
 * - ALL
 */
export enum CorrectionType {
  SINGLE,
  ALL,
}
