import {
    Snackbar as MuiSnackbar,
    SnackbarContent as MuiSnackbarContent,
    Alert as MuiAlert,
    AlertTitle as MuiAlertTitle,
    type SnackbarProps as MuiSnackbarProps,
} from '@mui/material';

export interface SnackbarProps extends MuiSnackbarProps {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    severity?: 'success' | 'info' | 'warning' | 'error';
    handleClose?: () => void;
}

export const Snackbar = ({ title, icon, action, severity, handleClose, description, ...rest }: SnackbarProps) => (
    <MuiSnackbar {...rest}>
        <MuiAlert icon={icon} severity={severity} action={action} onClose={handleClose}>
            <MuiAlertTitle>{title}</MuiAlertTitle>
            <MuiSnackbarContent message={description} />
        </MuiAlert>
    </MuiSnackbar>
);

export default Snackbar;
