import styled from 'styled-components';
import tokens from '@nivoda/design-tokens';

export const Button = styled.button`
    background-color: ${tokens.components.Button.contained.primary.background.default.value};
    color: ${tokens.components.Button.contained.primary.text.default.value};
    padding: 20px;
    border-radius: 8px;
    font-size: 16px;
    line-height: 16px;
`;
