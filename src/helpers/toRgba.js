import { Colors } from '../constants/theme';
import rgba from 'rgba-convert';

export const toRgba = ({ hex, opacity }) =>
  `rgba(${rgba(hex)
    .splice(1, 3)
    .toString()}, ${opacity});`;
