import {
    Tabs as MuiTabs,
    Tab as MuiTab,
    Box as MuiBox,
    Badge as MuiBadge,
    type TabsProps as MuiTabsProps,
    type BadgeProps as MuiBadgeProps,
    Badge,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

type CustomBadgeState = 'active' | 'viewed' | 'unread';

export interface Tab {
    label: string;
    route: string;
    badgeCount?: number;
    badgeState?: CustomBadgeState;
}

export interface TabsProps extends Omit<MuiTabsProps, 'badgeState'> {
    label: string;
    tabs: Tab[];
}

interface LabelWithBadgeProps extends Omit<Tab, 'route'> {}

interface CustomBadgeProps extends MuiBadgeProps {
    badgeState?: CustomBadgeState;
}

const CustomBadge = ({ badgeState, ...rest }: CustomBadgeProps): JSX.Element => {
    let badgeBackgroundColor: string;
    let badgeColor: string;

    switch (badgeState) {
        case 'viewed':
            badgeBackgroundColor = '#e7e5e4';
            badgeColor = '#44403c';
            break;
        case 'unread':
            badgeBackgroundColor = '#dc2626';
            badgeColor = '#FFFFFF';
            break;
        default:
            badgeBackgroundColor = '#e9e8ff';
            badgeColor = '#5620e1';
            break;
    }

    return (
        <MuiBadge
            slotProps={{
                badge: {
                    style: {
                        backgroundColor: badgeBackgroundColor,
                        color: badgeColor,
                    },
                },
            }}
            {...rest}
        />
    );
};

const LabelWithBadge = ({ badgeCount, label, badgeState }: LabelWithBadgeProps): JSX.Element => {
    return (
        <>
            {label} {badgeCount && <CustomBadge badgeContent={badgeCount} max={999} badgeState={badgeState} />}
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
                {tabs.map(({ badgeCount, route, label }, index) => (
                    <MuiTab
                        aria-label={route}
                        component={Link}
                        to={route}
                        key={route}
                        label={
                            <LabelWithBadge
                                badgeCount={badgeCount}
                                badgeState={pathname === route ? 'active' : index % 2 === 0 ? 'unread' : 'viewed'}
                                label={label}
                            />
                        }
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
