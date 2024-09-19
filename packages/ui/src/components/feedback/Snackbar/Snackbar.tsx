import {
    Snackbar as MuiSnackbar,
    Typography as MuiTypography,
    Box as MuiBox,
    Paper as MuiPaper,
    Button as MuiButton,
    type SnackbarProps as MuiSnackbarProps,
} from '@mui/material';
import { IconCircleCheckFilled, IconAlertTriangleFilled, IconCircleXFilled } from '@tabler/icons-react';

type Severity = 'success' | 'info' | 'warning' | 'error';

export interface SnackbarProps extends MuiSnackbarProps {
    title: string;
    description?: string;
    severity: Severity;
    icon: boolean;
    handleClose?: () => void;
    actionText?: string;
    showAction?: boolean;
}

const Icon = ({ severity }: { severity: Severity }) => {
    let iconToShow: React.ReactNode = <IconCircleCheckFilled />;

    switch (severity) {
        case 'info':
            iconToShow = <IconCircleCheckFilled />;
            break;
        case 'warning':
            iconToShow = <IconAlertTriangleFilled />;
            break;
        case 'error':
            iconToShow = <IconCircleXFilled />;
            break;
        default:
            iconToShow = <IconCircleCheckFilled />;
            break;
    }

    return iconToShow;
};

export const Snackbar = ({
    title,
    severity,
    handleClose,
    description,
    icon = false,
    actionText,
    showAction,
    ...rest
}: SnackbarProps) => (
    <MuiSnackbar className={`MuiSnackbar-colour${severity.charAt(0).toUpperCase() + severity.slice(1)}`} {...rest}>
        <MuiPaper elevation={0} variant="loose">
            {icon && (
                <div className="MuiSnackbar-icon">
                    <Icon severity={severity} />
                </div>
            )}
            <div className="MuiSnackbar-content">
                <div className="MuiSnackbar-message">
                    <MuiTypography variant="body2" className="MuiSnackbar-title">
                        {title}
                    </MuiTypography>
                    <MuiTypography variant="body2" className="MuiSnackbar-description">
                        {description}
                    </MuiTypography>
                </div>
                {showAction && (
                    <div className="MuiSnackbar-action">
                        <MuiButton variant="outlined" color="secondary" onClick={handleClose} size="small">
                            {actionText ?? 'Try again'}
                        </MuiButton>
                    </div>
                )}
            </div>
        </MuiPaper>
    </MuiSnackbar>
);

export default Snackbar;
