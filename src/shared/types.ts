export interface WordData {
  word: string;
  start_time: number;
  duration: number;
}

export enum CorrectionType {
  SINGLE,
  ALL,
}
