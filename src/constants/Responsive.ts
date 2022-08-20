import {windowHeight, windowWidth} from '.';

export const height = (size: number) => windowHeight * (size / 100);
export const width = (size: number) => windowWidth * (size / 100);
