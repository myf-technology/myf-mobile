import * as React from 'react';
import { Component as ComponentProp, forwardRef, LegacyRef } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

import Colors from '../../../../constants/Colors';
import { iconProps } from '../types';

const Component = (
  { fill = 'dark', ...props }: iconProps,
  ref: LegacyRef<ComponentProp<SvgProps>>
) => (
  <Svg
    width="20"
    height="11"
    viewBox="0 0 20 11"
    fill="none"
    {...props}
    ref={ref}
  >
    <Path
      d="M3.601 10C3.50567 10 3.42767 9.96967 3.367 9.909C3.315 9.84833 3.289 9.77467 3.289 9.688V2.954L1.313 4.475C1.235 4.527 1.157 4.54867 1.079 4.54C1.001 4.52267 0.931667 4.475 0.871 4.397L0.325 3.695C0.273 3.617 0.251333 3.53467 0.26 3.448C0.277333 3.36133 0.325 3.292 0.403 3.24L3.315 0.991C3.367 0.947666 3.419 0.921666 3.471 0.912999C3.523 0.904333 3.57933 0.899999 3.64 0.899999H4.784C4.87067 0.899999 4.94433 0.930333 5.005 0.991C5.06567 1.05167 5.096 1.12533 5.096 1.212V9.688C5.096 9.77467 5.06567 9.84833 5.005 9.909C4.94433 9.96967 4.87067 10 4.784 10H3.601ZM6.84558 10C6.76558 10 6.69758 9.972 6.64158 9.916C6.58558 9.86 6.55758 9.792 6.55758 9.712V9.1C6.55758 9.028 6.57358 8.944 6.60558 8.848C6.64558 8.744 6.72958 8.64 6.85758 8.536L8.75358 6.652C9.28158 6.236 9.70558 5.884 10.0256 5.596C10.3536 5.3 10.5896 5.032 10.7336 4.792C10.8856 4.544 10.9616 4.3 10.9616 4.06C10.9616 3.7 10.8616 3.408 10.6616 3.184C10.4696 2.96 10.1616 2.848 9.73758 2.848C9.45758 2.848 9.22158 2.908 9.02958 3.028C8.83758 3.14 8.68558 3.292 8.57358 3.484C8.46958 3.676 8.39758 3.888 8.35758 4.12C8.34158 4.224 8.29758 4.296 8.22558 4.336C8.15358 4.376 8.08158 4.396 8.00958 4.396H6.94158C6.86958 4.396 6.80958 4.372 6.76158 4.324C6.71358 4.276 6.68958 4.22 6.68958 4.156C6.69758 3.812 6.76958 3.48 6.90558 3.16C7.04158 2.832 7.23758 2.544 7.49358 2.296C7.75758 2.04 8.07758 1.836 8.45358 1.684C8.82958 1.532 9.25358 1.456 9.72558 1.456C10.3896 1.456 10.9376 1.568 11.3696 1.792C11.8096 2.016 12.1376 2.32 12.3536 2.704C12.5776 3.088 12.6896 3.52 12.6896 4C12.6896 4.376 12.6176 4.724 12.4736 5.044C12.3296 5.356 12.1216 5.66 11.8496 5.956C11.5776 6.244 11.2496 6.54 10.8656 6.844L9.16158 8.572H12.5816C12.6696 8.572 12.7376 8.6 12.7856 8.656C12.8416 8.704 12.8696 8.772 12.8696 8.86V9.712C12.8696 9.792 12.8416 9.86 12.7856 9.916C12.7376 9.972 12.6696 10 12.5816 10H6.84558ZM16.8683 10.11C16.3549 10.11 15.9113 10.0477 15.5373 9.923C15.1633 9.79833 14.8516 9.637 14.6023 9.439C14.3603 9.23367 14.1769 9.01367 14.0523 8.779C13.9276 8.537 13.8616 8.29867 13.8543 8.064C13.8543 7.998 13.8763 7.94667 13.9203 7.91C13.9716 7.866 14.0303 7.844 14.0963 7.844H15.0863C15.1596 7.844 15.2219 7.85867 15.2733 7.888C15.3246 7.91733 15.3686 7.976 15.4053 8.064C15.4713 8.262 15.5776 8.41967 15.7243 8.537C15.8783 8.65433 16.0543 8.73867 16.2523 8.79C16.4503 8.834 16.6593 8.856 16.8793 8.856C17.3193 8.856 17.6676 8.75333 17.9243 8.548C18.1883 8.33533 18.3203 8.03467 18.3203 7.646C18.3203 7.25733 18.1993 6.97867 17.9573 6.81C17.7153 6.634 17.3779 6.546 16.9453 6.546H15.8123C15.7316 6.546 15.6656 6.524 15.6143 6.48C15.5629 6.42867 15.5373 6.36267 15.5373 6.282V5.82C15.5373 5.74667 15.5519 5.68433 15.5813 5.633C15.6179 5.57433 15.6546 5.52667 15.6913 5.49L17.6603 3.565H14.5143C14.4336 3.565 14.3676 3.53933 14.3163 3.488C14.2723 3.43667 14.2503 3.37433 14.2503 3.301V2.575C14.2503 2.49433 14.2723 2.42833 14.3163 2.377C14.3676 2.32567 14.4336 2.3 14.5143 2.3H19.2333C19.3139 2.3 19.3799 2.32567 19.4313 2.377C19.4826 2.42833 19.5083 2.49433 19.5083 2.575V3.235C19.5083 3.301 19.4936 3.35967 19.4643 3.411C19.4349 3.46233 19.4019 3.50633 19.3653 3.543L17.4623 5.501L17.5943 5.512C18.0416 5.54867 18.4376 5.65133 18.7823 5.82C19.1343 5.98133 19.4056 6.21967 19.5963 6.535C19.7943 6.85033 19.8933 7.24633 19.8933 7.723C19.8933 8.22167 19.7613 8.65067 19.4973 9.01C19.2406 9.362 18.8849 9.63333 18.4303 9.824C17.9756 10.0147 17.4549 10.11 16.8683 10.11Z"
      fill={Colors[fill]}
    />
  </Svg>
);

const Type = forwardRef(Component);

export default Type;
