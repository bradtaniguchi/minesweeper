export enum GridElementType {
  BOMB = "BOMB",
  EMPTY = "EMPTY",
}

export interface GridElement {
  x: number;
  y: number;
  /**
   * The type of
   */
  gridElementType: GridElementType;
}

/**
 * The types of moves possible
 */
export enum MoveType {
  SWEEP = "SWEEP",
  FLAG = "FLAG",
}

export interface Move {
  /**
   * The type of move made
   */
  moveType: MoveType;
  /**
   * The element the user made the move on
   */
  gridElement: GridElement;
}

export interface Game {
  /**
   * The starting board, this wont change over the course of the game
   */
  board: GridElementType[];

  /**
   * This is the current board.
   * **note** note sure if we want to keep this or not
   */
  currentBoard: GridElementType[];

  /**
   * The list of moves made by the user
   */
  moves: Move[];

  /**
   * The time the user started making moves
   */
  startTime: Date;

  /**
   * The time the user either makes the wining, or losing move
   */
  endTime?: Date;
}
