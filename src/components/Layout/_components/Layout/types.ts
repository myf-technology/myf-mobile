import { ViewProps } from 'react-native';

export interface ILayoutProps extends ViewProps {
  customArrowBackHandler?: () => void;
  blockStepBack?: boolean;
  toolTips?: boolean;
  pageTitle?: string;
}
