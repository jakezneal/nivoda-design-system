import {
    Dialog as MuiDialog,
    DialogTitle as MuiDialogTitle,
    DialogContent as MuiDialogContent,
    DialogContentText as MuiDialogContentText,
    DialogActions as MuiDialogActions,
    Box as MuiBox,
    type DialogProps as MuiDialogProps,
} from '@mui/material';
import { useState } from 'react';
import { IconX } from '@tabler/icons-react';
import { Button } from '../../inputs/Button/Button';

type ButtonColour = 'primary' | 'error' | 'success';

export interface DialogProps extends MuiDialogProps {
    description?: string;
    primaryButtonText?: string;
    primaryButtonColour?: ButtonColour;
}

export const Dialog = ({
    children,
    title,
    description,
    open,
    primaryButtonText,
    primaryButtonColour,
    ...rest
}: DialogProps) => {
    const [isOpen, setIsOpen] = useState(open);

    return (
        <MuiDialog
            {...rest}
            open={isOpen}
            scroll="paper"
            onClose={() => setIsOpen(false)}
            PaperProps={{ elevation: 0, variant: 'tight' }}
        >
            <IconX onClick={() => setIsOpen(false)} />
            <MuiBox>
                {title && <MuiDialogTitle>{title}</MuiDialogTitle>}
                {description && <MuiDialogContentText>{description}</MuiDialogContentText>}
            </MuiBox>
            {children && (
                <MuiDialogContent>
                    <MuiDialogContentText>{children}</MuiDialogContentText>
                </MuiDialogContent>
            )}
            <MuiDialogActions>
                <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button variant="contained" color={primaryButtonColour ?? 'primary'} onClick={() => {}}>
                    {primaryButtonText}
                </Button>
            </MuiDialogActions>
        </MuiDialog>
    );
};

export default Dialog;
