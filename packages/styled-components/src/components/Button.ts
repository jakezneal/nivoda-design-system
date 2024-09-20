import styled from 'styled-components';
import tokens from '@nivoda/design-tokens';

export const Button = styled.button`
    background-color: ${tokens.components.button.contained.primary.background.default};
    color: ${tokens.components.button.contained.primary.text.default};
    padding: 20px;
    border-radius: 8px;
    font-size: 16px;
    line-height: 16px;
`;
