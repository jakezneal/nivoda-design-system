import {
    Accordion as MuiAccordion,
    AccordionSummary as MuiAccordionSummary,
    AccordionDetails as MuiAccordionDetails,
    type AccordionProps as MuiAccordionProps,
} from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';

interface AccordionItemProps {
    id: number;
    title: string;
    children: React.ReactNode;
}

export interface AccordionProps extends Omit<MuiAccordionProps, 'children'> {
    items: AccordionItemProps[];
}

export const Accordion = ({ items, ...rest }: AccordionProps) => {
    const [expanded, setExpanded] = useState<number | false>(items[0].id);

    const handleChange = (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            {items.map(({ id, title, children }) => (
                <MuiAccordion key={id} expanded={expanded === id} onChange={handleChange(id)}>
                    <MuiAccordionSummary expandIcon={<IconChevronDown />}>{title}</MuiAccordionSummary>
                    <MuiAccordionDetails>{children}</MuiAccordionDetails>
                </MuiAccordion>
            ))}
        </>
    );
};

export default Accordion;
