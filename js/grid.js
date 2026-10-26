// Source code is private. This file shows only its classes and function signatures.

import { CellState, DEFAULT_WEIGHT } from './constants.js';

export class Grid {
  constructor(rows, cols) { /* private */ }
  _init() { /* private */ }
  key(row, col) { /* private */ }
  keyStr(row, col) { /* private */ }
  fromKey(k) { /* private */ }
  fromKeyStr(s) { /* private */ }
  get(row, col) { /* private */ }
  set(row, col, state) { /* private */ }
  isValid(row, col) { /* private */ }
  isWalkable(row, col) { /* private */ }
  setWeight(row, col, w) { /* private */ }
  getWeight(row, col) { /* private */ }
  getNeighbors(row, col, diagonal = false) { /* private */ }
  clearVisualization() { /* private */ }
  clearWalls() { /* private */ }
  reset() { /* private */ }
  setStart(row, col) { /* private */ }
  setTarget(row, col) { /* private */ }
  clone() { /* private */ }
}
