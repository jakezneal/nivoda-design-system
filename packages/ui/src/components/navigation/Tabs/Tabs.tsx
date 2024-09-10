import {
    Tabs as MuiTabs,
    Tab as MuiTab,
    Box as MuiBox,
    Badge as MuiBadge,
    type TabsProps as MuiTabsProps,
    type TabProps as MuiTabProps,
    Badge,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export interface Tab {
    label: string;
    route: string;
    badgeCount?: number;
    badgeState?: 'viewed' | 'unread';
}

export interface TabsProps extends MuiTabsProps {
    label: string;
    tabs: Tab[];
}

const LabelWithBadge = ({ badgeCount, label }: { badgeCount?: number; label: string }) => {
    return (
        <>
            {label} {badgeCount && <MuiBadge badgeContent={badgeCount} max={999} />}
        </>
    );
};

export const Tabs = ({ label, tabs, children, ...rest }: TabsProps) => {
    const { pathname } = useLocation();

    return (
        <MuiBox sx={{ maxWidth: '500px' }}>
            <MuiTabs
                aria-label={label}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                value={pathname}
                {...rest}
            >
                {tabs.map(({ badgeCount, route, label }) => (
                    <MuiTab
                        aria-label={route}
                        component={Link}
                        to={route}
                        key={route}
                        label={<LabelWithBadge badgeCount={badgeCount} label={label} />}
                        value={route}
                    />
                ))}
            </MuiTabs>
            <MuiBox role="tabpanel" id={pathname} aria-labelledby={pathname}>
                {children}
            </MuiBox>
        </MuiBox>
    );
};

export default Tabs;
