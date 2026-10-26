// Source code is private. This file shows only its classes and function signatures.

import { Grid } from './grid.js';
import { Renderer } from './renderer.js';
import { generateMaze } from './mazeGenerators.js';
import { bfs } from './algorithms/bfs.js';
import { dfs } from './algorithms/dfs.js';
import { dijkstra } from './algorithms/dijkstra.js';
import { astar } from './algorithms/astar.js';
import { greedy } from './algorithms/greedy.js';
import { bidirectionalBfs } from './algorithms/bidirectional.js';
import { quantumSearch } from './algorithms/quantum.js';
import { quantumWaveSearch } from './algorithms/quantumWave.js';
import { quantumWalkSearch } from './algorithms/quantumWalk.js';
import { hybridQuantumAstar } from './algorithms/hybridQuantumAstar.js';
import { settingsForMode, PRESETS } from './quantum/quantumSettings.js';
import { CellState, AlgorithmInfo, ToolMode, DEFAULT_WEIGHT } from './constants.js';

const $ = id => { /* private */ };

function init() { /* private */ }

function generateNewMaze() { /* private */ }

function render(pathPct = state.pathAnimPct) { /* private */ }

function runVisualization() { /* private */ }

function createGenerator(algoId, grid, start, target) { /* private */ }

function _applyQuantumSliders(s, mode) { /* private */ }

function startQuantumPulse() { /* private */ }

function stopQuantumPulse() { /* private */ }

function scheduleStep() { /* private */ }

function doStep() { /* private */ }

function stepForward() { /* private */ }

function applyStepToGrid(step) { /* private */ }

function updateQuantumDebug(step) { /* private */ }

function finishVisualization(step) { /* private */ }

function startPathAnimation(path) { /* private */ }

function pauseVisualization() { /* private */ }

function resumeVisualization() { /* private */ }

function stopVisualization() { /* private */ }

function updatePanels(step) { /* private */ }

function showStats(step, elapsed) { /* private */ }

function clearStats() { /* private */ }

function addToHistory(step, elapsed) { /* private */ }

function updateCompareTable() { /* private */ }

function startRaceMode() { /* private */ }

function createGeneratorFor(algoId, grid, start, target) { /* private */ }

function animateRace() { /* private */ }

function onRaceRunnerDone(runner) { /* private */ }

function animateRacePath(runner) { /* private */ }

function showRaceComparison() { /* private */ }

function openAlgoDetail(runner) { /* private */ }

function stopRaceMode() { /* private */ }

function bindCanvasEvents() { /* private */ }

function getCell(e) { /* private */ }

function onMouseDown(e) { /* private */ }

function onMouseMove(e) { /* private */ }

function onTouchStart(e) { /* private */ }

function onTouchMove(e) { /* private */ }

function handleCellInteraction([r, c], rightClick) { /* private */ }

function bindControls() { /* private */ }

function bindSlider(sliderId, valId, onChange, isFloat = false) { /* private */ }

function setControlsEnabled(enabled) { /* private */ }

function updateAlgorithmInfo() { /* private */ }

function buildFeaturesList(info) { /* private */ }

function escHtml(s) { /* private */ }
