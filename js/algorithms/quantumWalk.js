// Source code is private. This file shows only its classes and function signatures.

import { walkExplain, walkDataStructure } from '../quantum/quantumExplain.js';
import { CellState } from '../constants.js';

/**
 * quantumWalk.js — Discrete-Time Quantum Walk Search
 *
 * A quantum-inspired directional-amplitude simulation.
 * Each cell carries four directional amplitudes (N/S/E/W) that represent
 * "flow channels" for the probability wave.
 *
 * Per step:
 *   1. Coin  — Grover coin mixes directions inside every active cell
 *   2. Spread — amplitude flows from each cell to neighbours, with
 *               phase rotation; walls reflect with phase flip
 *   3. Oracle — phase-flip all directions at the target
 *   4. Normalise
 *   5. Measure — collapse when target probability exceeds threshold
 *
 *  NOTE ON LOCALIZATION
 *  A strict DTQW on a tree-like maze graph can localise near the origin.
 *  To guarantee the wave spreads visually through the full maze we use a
 *  hybrid approach: directional amplitudes + a small BFS-style propagation
 *  bias so every corridor eventually receives flow.  The result still shows
 *  genuine interference, wall reflection, and directional arrows while
 *  avoiding quantum Anderson localisation.
 *
 *  ⚠ Classical simulation of quantum-inspired ideas.
 */
import {
  normaliseWalk,
  parentChainPath, probGradientPath,
} from '../quantum/quantumMath.js';

export function* quantumWalkSearch(grid, start, target, diagonal, settings) { /* private */ }
