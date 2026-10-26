// Source code is private. This file shows only its classes and function signatures.

/**
 * quantumMath.js
 * Core quantum mathematics — complex interference, Grover coin/diffusion,
 * normalisation, path reconstruction. All functions operate on typed arrays.
 */
export const PI = undefined /* private */;

export const TAU = undefined /* private */;

export const cmplxNorm = (r, i) => { /* private */ };

export const cmplxArg = (r, i) => { /* private */ };

export const cmplxAddR = (r1, r2) => { /* private */ };

export const polarToR = (a, p) => { /* private */ };

export const polarToI = (a, p) => { /* private */ };

/**
 * Accumulate a wave contribution (amp, phase) into (accumR, accumI) buffers
 * at a cell index.  Call this for every incoming wave per cell, then
 * finaliseInterference to convert back to (amplitude, phase).
 */
export function addWaveContrib(accumR, accumI, idx, amp, phase) { /* private */ }

/**
 * Finalise interference at one index: convert accumulated (re,im) → (amp,phase).
 * Returns { amp, phase, re, im }
 */
export function finaliseInterference(accumR, accumI, idx) { /* private */ }

/**
 * In-place Grover diffusion over the amplitude array at activeIndices.
 * strength 0 = no-op, 1 = full inversion-about-mean.
 */
export function groverDiffusion(amplitude, activeIndices, strength) { /* private */ }

/**
 * Grover coin for 4-directional walk.
 * Input: current directional amplitudes at a cell.
 * Output: mixed amplitudes after the coin (in-place on buffers at idx).
 *
 * Grover coin: G = 2|ψ̄><ψ̄| − I  where |ψ̄> = uniform superposition.
 * For 4 dirs:  d'_k = mean(all) − d_k   (mean is taken × 2 because d/4*2=d/2)
 * Concretely:  new_d = (sum/2) − d_k
 */
export function applyGroverCoin4(ampN, ampS, ampE, ampW, idx) { /* private */ }

/**
 * Normalise amplitude array so Σ amplitude[i]² = 1.
 * Returns pre-normalisation Σ amp².
 */
export function normaliseAmplitudes(amplitude, activeIndices) { /* private */ }

/**
 * Normalise all four directional amp arrays simultaneously (quantum walk).
 */
export function normaliseWalk(ampN, ampS, ampE, ampW, activeIndices) { /* private */ }

/**
 * Follow parent pointers from targetIdx back to startIdx.
 * Returns [[r,c], …] or null if chain is broken.
 */
export function parentChainPath(parent, startIdx, targetIdx, cols) { /* private */ }

/**
 * Probability-gradient path: from target, repeatedly step to the
 * neighbour with highest probability that hasn't been visited yet.
 * Used as fallback when parent chain is incomplete.
 */
export function probGradientPath(probability, walls, startIdx, targetIdx, rows, cols, maxHops) { /* private */ }

/** Map phase (−π … π) to a CSS hue (160–540 → cyan / magenta spectrum). */
export function phaseToHue(phase) { /* private */ }
