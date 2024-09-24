import {
    Breadcrumbs as MuiBreadcrumbs,
    Link as MuiLink,
    Typography as MuiTypography,
    type BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material';
import { IconArrowLeft } from '@tabler/icons-react';

interface BreadcrumbItemProps {
    label: string;
    href?: string;
}

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
    items: BreadcrumbItemProps[];
}

export const Breadcrumbs = ({ items, ...rest }: BreadcrumbsProps) => (
    <MuiBreadcrumbs {...rest}>
        <MuiLink href="#" underline="none">
            <IconArrowLeft size={16} />
            Back
        </MuiLink>
        {items.map(({ label, href }) =>
            href ? (
                <MuiLink key={label} href={href} underline="none">
                    {label}
                </MuiLink>
            ) : (
                <MuiTypography key={label}>{label}</MuiTypography>
            ),
        )}
    </MuiBreadcrumbs>
);

export default Breadcrumbs;
