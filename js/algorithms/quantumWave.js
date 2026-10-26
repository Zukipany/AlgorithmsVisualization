// Source code is private. This file shows only its classes and function signatures.

import { waveExplain, waveDataStructure } from '../quantum/quantumExplain.js';
import { CellState } from '../constants.js';

/**
 * quantumWave.js — Quantum Wave Search
 *
 * Simulates a probability-amplitude wave flooding the maze:
 *  • TypedArray-backed state (no per-cell objects)
 *  • Complex (real + imaginary) amplitude → genuine interference patterns
 *  • Oracle phase-flip at the target cell
 *  • Grover-style diffusion operator after each wave step
 *  • Probability normalisation for numerical stability
 *  • Sparse active-set so only relevant cells are processed
 *  • Measurement / collapse once target probability exceeds threshold
 *  • Dual path-reconstruction: parent pointers + probability gradient
 *
 *  ⚠ This is a CLASSICAL SIMULATION of quantum-inspired ideas.
 *    A real quantum speedup requires actual quantum hardware.
 */
import {
  addWaveContrib, finaliseInterference,
  groverDiffusion, normaliseAmplitudes,
  parentChainPath, probGradientPath,
  phaseToHue,
} from '../quantum/quantumMath.js';

export function* quantumWaveSearch(grid, start, target, diagonal, settings) { /* private */ }

function* _collapse(state, settings) { /* private */ }
