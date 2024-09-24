import {
    Card as MuiCard,
    CardContent as MuiCardContent,
    CardMedia as MuiCardMedia,
    CardActions as MuiCardActions,
    IconButton as MuiIconButton,
    Box as MuiBox,
    type CardProps as MuiCardProps,
} from '@mui/material';
import { IconHeart, IconHandStop, IconDiamond, IconDownload } from '@tabler/icons-react';
import { Checkbox } from '@/components/inputs/Checkbox/Checkbox';

export interface CardProps extends MuiCardProps {}

export const Card = ({ children, ...rest }: CardProps) => (
    <MuiCard {...rest}>
        <MuiCardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Checkbox label="Select" />
            <MuiBox sx={{ display: 'flex', gap: '8px' }}>
                <MuiIconButton size="small" sx={{ padding: 0 }}>
                    <IconHeart />
                </MuiIconButton>
                <MuiIconButton size="small" sx={{ padding: 0 }}>
                    <IconHandStop />
                </MuiIconButton>
                <MuiIconButton size="small" sx={{ padding: 0 }}>
                    <IconDiamond />
                </MuiIconButton>
                <MuiIconButton size="small" sx={{ padding: 0 }}>
                    <IconDownload />
                </MuiIconButton>
            </MuiBox>
        </MuiCardActions>
        <MuiCardMedia component="img" height={350} image="https://via.placeholder.com/350" />
        <MuiCardContent>{children}</MuiCardContent>
    </MuiCard>
);

export default Card;
