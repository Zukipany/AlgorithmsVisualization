// Source code is private. This file shows only its classes and function signatures.

import { hybridExplain, hybridDataStructure } from '../quantum/quantumExplain.js';
import { getHeuristic } from '../heuristics.js';
import { reconstructPath } from './bfs.js';
import { CellState } from '../constants.js';

/**
 * hybridQuantumAstar.js — Hybrid A* + Quantum Amplitude Search
 *
 * A* drives reliable shortest-path exploration.
 * A quantum amplitude field surrounds the frontier, providing:
 *   • probability heatmap visualisation
 *   • interference-based dead-end suppression
 *   • visual cancellation when parents change
 *   • quantum "glow" strongest along the optimal route
 */
import { addWaveContrib, finaliseInterference, normaliseAmplitudes, parentChainPath } from '../quantum/quantumMath.js';

class MinHeap {
  constructor() { /* private */ }
  push(v) { /* private */ }
  pop() { /* private */ }
  get size() { /* private */ }
  _up(i) { /* private */ }
  _dn(i) { /* private */ }
}

export function* hybridQuantumAstar(grid, start, target, diagonal, settings) { /* private */ }
