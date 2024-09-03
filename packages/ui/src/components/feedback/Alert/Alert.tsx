import { Alert as MuiAlert, AlertTitle as MuiAlertTitle, type AlertProps as MuiAlertProps } from '@mui/material';

export interface AlertProps extends MuiAlertProps {
    title?: string;
}

export const Alert = ({ title, children, ...rest }: AlertProps) => (
    <MuiAlert onClose={() => {}} {...rest}>
        {title && <MuiAlertTitle>{title}</MuiAlertTitle>}
        {children}
    </MuiAlert>
);

export default Alert;
