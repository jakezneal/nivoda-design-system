import styled from 'styled-components';
import {
    ComponentsButtonContainedPrimaryBackgroundDefault,
    ComponentsButtonContainedPrimaryTextDefault,
} from '@nivoda/design-tokens';

export const Button = styled.button`
    background-color: ${ComponentsButtonContainedPrimaryBackgroundDefault};
    color: ${ComponentsButtonContainedPrimaryTextDefault};
    padding: 20px;
    border-radius: 8px;
    font-size: 16px;
    line-height: 16px;
`;
