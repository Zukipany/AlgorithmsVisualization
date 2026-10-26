// Source code is private. This file shows only its classes and function signatures.

import { CellState, Colors } from './constants.js';
import {
  drawQuantumWave,
  drawQuantumWalk,
  drawQuantumHybrid,
} from './quantum/quantumRenderer.js';

export class Renderer {
  constructor(canvas) { /* private */ }
  resize(grid) { /* private */ }
  cellAt(x, y) { /* private */ }
  draw(grid, vizState = null, pathAnimPct = 0) { /* private */ }
  _drawClassical(grid, vizState, pathAnimPct) { /* private */ }
  _drawQuantum(grid, vizState, pathAnimPct) { /* private */ }
  drawArrows(parents, grid) { /* private */ }
  drawValues(vizState, grid) { /* private */ }
  drawSpecialCells(grid) { /* private */ }
}

function drawMarker(ctx, x, y, cs, symbol, color) { /* private */ }

function lerp(a, b, t) { /* private */ }

function _legacyToWaveStep(vizState) { /* private */ }
