import {colors} from '@/styles';
import {Svg, Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};
export default function SignIn({size, color}: Props) {
  return (
    <Svg
      width={size ? (size / 20) * 16 : '16'}
      height={size ?? '20'}
      viewBox="0 0 16 20"
      fill={color ?? colors.grey[400]}>
      <Path d="M13.3333 10C13.3333 9.77899 13.2631 9.56703 13.1381 9.41075C13.013 9.25447 12.8435 9.16667 12.6667 9.16667H7.60666L9.14 7.25834C9.20216 7.18064 9.25146 7.0884 9.2851 6.98688C9.31874 6.88536 9.33606 6.77655 9.33606 6.66667C9.33606 6.55679 9.31874 6.44798 9.2851 6.34646C9.25146 6.24495 9.20216 6.1527 9.14 6.075C9.07784 5.99731 9.00404 5.93567 8.92283 5.89362C8.84162 5.85157 8.75457 5.82993 8.66666 5.82993C8.57876 5.82993 8.49171 5.85157 8.4105 5.89362C8.32928 5.93567 8.25549 5.99731 8.19333 6.075L5.52666 9.40834C5.46597 9.48759 5.41839 9.58105 5.38666 9.68334C5.31999 9.88622 5.31999 10.1138 5.38666 10.3167C5.41839 10.419 5.46597 10.5124 5.52666 10.5917L8.19333 13.925C8.25531 14.0031 8.32904 14.0651 8.41028 14.1074C8.49152 14.1497 8.57866 14.1715 8.66666 14.1715C8.75467 14.1715 8.84181 14.1497 8.92305 14.1074C9.00429 14.0651 9.07802 14.0031 9.14 13.925C9.20248 13.8475 9.25208 13.7554 9.28592 13.6538C9.31977 13.5523 9.3372 13.4433 9.3372 13.3333C9.3372 13.2233 9.31977 13.1144 9.28592 13.0129C9.25208 12.9113 9.20248 12.8191 9.14 12.7417L7.60666 10.8333H12.6667C12.8435 10.8333 13.013 10.7455 13.1381 10.5893C13.2631 10.433 13.3333 10.221 13.3333 10ZM11.3333 1.66667H4.66666C4.13623 1.66667 3.62752 1.93006 3.25245 2.3989C2.87738 2.86775 2.66666 3.50363 2.66666 4.16667V15.8333C2.66666 16.4964 2.87738 17.1323 3.25245 17.6011C3.62752 18.0699 4.13623 18.3333 4.66666 18.3333H11.3333C11.8638 18.3333 12.3725 18.0699 12.7475 17.6011C13.1226 17.1323 13.3333 16.4964 13.3333 15.8333V13.3333C13.3333 13.1123 13.2631 12.9004 13.1381 12.7441C13.013 12.5878 12.8435 12.5 12.6667 12.5C12.4899 12.5 12.3203 12.5878 12.1953 12.7441C12.0702 12.9004 12 13.1123 12 13.3333V15.8333C12 16.0544 11.9298 16.2663 11.8047 16.4226C11.6797 16.5789 11.5101 16.6667 11.3333 16.6667H4.66666C4.48985 16.6667 4.32028 16.5789 4.19526 16.4226C4.07024 16.2663 4 16.0544 4 15.8333V4.16667C4 3.94566 4.07024 3.7337 4.19526 3.57742C4.32028 3.42114 4.48985 3.33334 4.66666 3.33334H11.3333C11.5101 3.33334 11.6797 3.42114 11.8047 3.57742C11.9298 3.7337 12 3.94566 12 4.16667V6.66667C12 6.88769 12.0702 7.09965 12.1953 7.25593C12.3203 7.41221 12.4899 7.5 12.6667 7.5C12.8435 7.5 13.013 7.41221 13.1381 7.25593C13.2631 7.09965 13.3333 6.88769 13.3333 6.66667V4.16667C13.3333 3.50363 13.1226 2.86775 12.7475 2.3989C12.3725 1.93006 11.8638 1.66667 11.3333 1.66667Z" />
    </Svg>
  );
}
