import Layout from './Layout';

export const height = (size: number) => Layout.window.height * (size / 100);
export const width = (size: number) => Layout.window.width * (size / 100);
