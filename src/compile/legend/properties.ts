import {LabelOverlap} from 'vega';
import {FieldDef, valueArray} from '../../fielddef';
import {Legend, LegendConfig} from '../../legend';
import {hasContinuousDomain, ScaleType} from '../../scale';
import {contains, getFirstDefined} from '../../util';

export function values(legend: Legend, fieldDef: FieldDef<string>) {
  const vals = legend.values;

  if (vals) {
    return valueArray(fieldDef, vals);
  }
  return undefined;
}

export function clipHeight(scaleType: ScaleType) {
  if (hasContinuousDomain(scaleType)) {
    return 20;
  }
  return undefined;
}

export function defaultGradientLength(legend: Legend, legendConfig: LegendConfig) {
  const {
    gradientDirection,
    gradientHorizontalMaxLength,
    gradientHorizontalMinLength,
    gradientVerticalMaxLength,
    gradientVerticalMinLength
  } = legendConfig;

  const direction = getFirstDefined(legend.direction, gradientDirection);

  if (direction === 'horizontal') {
    const orient = getFirstDefined(legend.orient, legendConfig.orient);
    if (orient === 'left' || orient === 'right') {
      return gradientHorizontalMinLength;
    } else {
      return gradientLengthSignal('width', gradientHorizontalMinLength, gradientHorizontalMaxLength);
    }
  } else {
    return gradientLengthSignal('height', gradientVerticalMinLength, gradientVerticalMaxLength);
  }
}

function gradientLengthSignal(size: 'width' | 'height', min: number, max: number) {
  return {signal: `min(max(${size}, ${min}), ${max})`};
}

export function labelOverlap(scaleType: ScaleType): LabelOverlap {
  if (contains(['quantile', 'threshold', 'log'], scaleType)) {
    return 'greedy';
  }
  return undefined;
}
