import { Alert as MuiAlert, AlertTitle as MuiAlertTitle, type AlertProps as MuiAlertProps } from '@mui/material';

export interface AlertProps extends MuiAlertProps {
    title?: string;
}

function AlertIconSuccess() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.725 17.5H16.275C17.5583 17.5 18.3583 16.1083 17.7167 15L11.4417 4.15834C10.8 3.05 9.2 3.05 8.55833 4.15834L2.28333 15C1.64167 16.1083 2.44167 17.5 3.725 17.5V17.5ZM10 11.6667C9.54167 11.6667 9.16667 11.2917 9.16667 10.8333V9.16667C9.16667 8.70834 9.54167 8.33334 10 8.33334C10.4583 8.33334 10.8333 8.70834 10.8333 9.16667V10.8333C10.8333 11.2917 10.4583 11.6667 10 11.6667ZM10.8333 15H9.16667V13.3333H10.8333V15Z"
                fill="#3D745C"
            />
        </svg>
    );
}

function AlertIconInfo() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.725 17.5H16.275C17.5583 17.5 18.3583 16.1083 17.7167 15L11.4417 4.15834C10.8 3.05 9.2 3.05 8.55833 4.15834L2.28333 15C1.64167 16.1083 2.44167 17.5 3.725 17.5V17.5ZM10 11.6667C9.54167 11.6667 9.16667 11.2917 9.16667 10.8333V9.16667C9.16667 8.70834 9.54167 8.33334 10 8.33334C10.4583 8.33334 10.8333 8.70834 10.8333 9.16667V10.8333C10.8333 11.2917 10.4583 11.6667 10 11.6667ZM10.8333 15H9.16667V13.3333H10.8333V15Z"
                fill="#1E4CF5"
            />
        </svg>
    );
}

function AlertIconWarning() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.725 17.5H16.275C17.5583 17.5 18.3583 16.1083 17.7167 15L11.4417 4.15834C10.8 3.05 9.2 3.05 8.55833 4.15834L2.28333 15C1.64167 16.1083 2.44167 17.5 3.725 17.5V17.5ZM10 11.6667C9.54167 11.6667 9.16667 11.2917 9.16667 10.8333V9.16667C9.16667 8.70834 9.54167 8.33334 10 8.33334C10.4583 8.33334 10.8333 8.70834 10.8333 9.16667V10.8333C10.8333 11.2917 10.4583 11.6667 10 11.6667ZM10.8333 15H9.16667V13.3333H10.8333V15Z"
                fill="#D97706"
            />
        </svg>
    );
}

function AlertIconError() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.725 17.5H16.275C17.5583 17.5 18.3583 16.1083 17.7167 15L11.4417 4.15834C10.8 3.05 9.2 3.05 8.55833 4.15834L2.28333 15C1.64167 16.1083 2.44167 17.5 3.725 17.5V17.5ZM10 11.6667C9.54167 11.6667 9.16667 11.2917 9.16667 10.8333V9.16667C9.16667 8.70834 9.54167 8.33334 10 8.33334C10.4583 8.33334 10.8333 8.70834 10.8333 9.16667V10.8333C10.8333 11.2917 10.4583 11.6667 10 11.6667ZM10.8333 15H9.16667V13.3333H10.8333V15Z"
                fill="#B91C1C"
            />
        </svg>
    );
}

export const Alert = ({ title, children, ...rest }: AlertProps) => (
    <MuiAlert
        iconMapping={{
            success: <AlertIconSuccess />,
            info: <AlertIconInfo />,
            warning: <AlertIconWarning />,
            error: <AlertIconError />,
        }}
        onClose={() => {}}
        {...rest}
    >
        {title && <MuiAlertTitle>{title}</MuiAlertTitle>}
        {children}
    </MuiAlert>
);

export default Alert;
