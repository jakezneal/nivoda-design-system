import tokens from '@nivoda/design-tokens';

const MuiTooltipStyles = {
    styleOverrides: {
        tooltip: {
            backgroundColor: tokens.components.tooltip.background,
            borderRadius: tokens.components.tooltip.border.radius,
            padding: `${tokens.components.tooltip.padding.vertical} ${tokens.components.tooltip.padding.horizontal}`,
        },
    },
};

export default MuiTooltipStyles;
