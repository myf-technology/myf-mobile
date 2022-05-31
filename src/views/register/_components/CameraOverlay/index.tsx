import { RoundedOverlay } from './_components/RoundedOverlay';
import { SmallSquaredOverlay } from './_components/SmallSquaredOverlay';
import { SquaredOverlay } from './_components/SquaredOverlay';
import { Iprops } from './types';

export const CameraOverlay = ({ mode = 'selfie', testID, label }: Iprops) => {
  switch (mode) {
    case 'document':
      return <SquaredOverlay testID={testID} />;

    case 'selfie':
      return <RoundedOverlay testID={testID} />;

    case 'QRCode':
      return <SmallSquaredOverlay label={label ?? undefined} testID={testID} />;

    default:
      return <RoundedOverlay testID={testID} />;
  }
};
