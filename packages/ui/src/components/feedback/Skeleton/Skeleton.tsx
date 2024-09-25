import { Skeleton as MuiSkeleton, type SkeletonProps as MuiSkeletonProps } from '@mui/material';

export interface SkeletonProps extends MuiSkeletonProps {}

export const Skeleton = ({ ...rest }: SkeletonProps) => <MuiSkeleton {...rest} />;

export default Skeleton;
