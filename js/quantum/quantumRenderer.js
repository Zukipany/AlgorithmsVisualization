// Source code is private. This file shows only its classes and function signatures.

import { CellState, Colors } from '../constants.js';

/**
 * quantumRenderer.js
 * Draws all three quantum modes on a canvas:
 *   • Probability heatmap (brightness = |ψ|²)
 *   • Phase colouring (hue = phase angle)
 *   • Constructive / destructive interference flashes
 *   • Directional arrows for quantum walk
 *   • Quantum glow + path reveal for hybrid mode
 *   • Start / target markers always on top
 *
 * Called from the main Renderer class.
 */
import { phaseToHue } from './quantumMath.js';

function pulse() { /* private */ }

/**
 * Draw quantum_wave or quantum_hybrid heatmap.
 * step: the yielded step object from the generator.
 */
export function drawQuantumWave(ctx, cs, grid, step, pathAnimPct) { /* private */ }

/**
 * Draw quantum_walk heatmap with per-direction probability.
 */
export function drawQuantumWalk(ctx, cs, grid, step, pathAnimPct, showArrows) { /* private */ }

/**
 * Draw quantum_hybrid (A* visited cells + quantum amplitude glow).
 */
export function drawQuantumHybrid(ctx, cs, grid, step, pathAnimPct) { /* private */ }

function _clearQuantum(ctx, cs, cols, rows) { /* private */ }

function _drawWall(ctx, x, y, cs) { /* private */ }

function _drawDimCell(ctx, x, y, cs) { /* private */ }

function _placeholder(ctx, x, y, cs) { /* private */ }

function _targetCell(ctx, x, y, cs, targetProb) { /* private */ }

function _buildPathReveal(path, pct) { /* private */ }

function _drawPathCell(ctx, x, y, cs, path, r, c, pct) { /* private */ }

function _constructiveFlash(ctx, x, y, cs) { /* private */ }

function _destructiveFlash(ctx, x, y, cs) { /* private */ }

function _dominantDir(ampN, ampS, ampE, ampW, idx) { /* private */ }

function _drawDirArrow(ctx, x, y, cs, dir, norm) { /* private */ }

function _scanlines(ctx, cs, cols, rows) { /* private */ }

function _drawSpecial(ctx, cs, grid, targetProb) { /* private */ }

function _marker(ctx, x, y, cs, sym, col) { /* private */ }
