const paintCells = document.getElementsByClassName("cell")
const watermarkChekbox = document.getElementById('watermark-checkbox')
const canvas = document.querySelector('canvas')
const cellsSlider = document.getElementById('cells-slider')
const paintZone = document.getElementById('paint-zone')
const colorSelector = document.getElementById('color-selector')
const colorSelectCheckbox = document.getElementById("select-color")
const canvasSizeShower = document.getElementById("canvas-size-shower")
const eraseButton = document.getElementById("erase-selector-button")
const guideCheckbox = document.getElementById("guide-checkbox")
const borderCheckbox = document.getElementById("border-checkbox")
const cellBorderWidthSlider = document.getElementById("cell-border-width-slider")
const cellBorderWidthShower = document.getElementById("cell-border-width-shower")
const multiplyQButton = document.getElementById("multiply-q-button")
const selectAllCopyTargets = document.getElementById("select-all-copy-targets")
const multiplyQSelector = document.getElementById("multiply-q-selector")
const copyTargetsShower = document.getElementById("copy-targets-shower")
const randomiseCellsButton = document.getElementById("randomise-cells-button")
const randomColorSelectorButton = document.getElementById("random-color-selector-button")
const root = document.querySelector(":root")
const colorToBeReplacedSelector = document.getElementById("color-to-be-replaced-selector")
const colorToReplaceWithSelector = document.getElementById("color-to-replace-with-selector")
const replaceButton = document.getElementById("replace-button")
const selectColorForReplacer = document.getElementById("select-color-for-replacer")
const selectColorForFind = document.getElementById("select-color-for-find")
const thresholdShower = document.getElementById("threshold-shower")
const colorMatchThresholdSlider = document.getElementById("color-match-threshold-range")
const multiplyTargetCheckboxes = {
    q1MultiplyTargetCheckbox: document.getElementById("q1-multiply-target-checkbox"),
    q2MultiplyTargetCheckbox: document.getElementById("q2-multiply-target-checkbox"),
    q3MultiplyTargetCheckbox: document.getElementById("q3-multiply-target-checkbox"),
    q4MultiplyTargetCheckbox: document.getElementById("q4-multiply-target-checkbox"),
}