import { FC, SyntheticEvent, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import { For, If } from '../RenderUtils';
import TodoItem from './TodoItem';
import Arrow from '../../assets/icons/Arrow';
import { ITodoOlderTasks } from '../../type';

const TodoOlderTasksContainer = styled(Accordion)(() => ({
  borderRadius: '40px !important',
  marginTop: '32px',
  padding: '16px 25px 18px 17px',
  boxShadow:
    '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
  '::before': {
    backgroundColor: 'transparent',
  },
}));

const TodoOlderTasks: FC<ITodoOlderTasks> = ({ title, tasks }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <TodoOlderTasksContainer
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
    >
      <AccordionSummary
        expandIcon={<Arrow />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{
          padding: 0,
          '&::before': {
            content: "''",
            display: 'block',
            backgroundColor: '#A9A9A9',
            height: 45,
            width: 5,
            borderRadius: 2,
            marginRight: '14px',
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Abhaya Libre',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '28px',
            color: '#F4F4F4',
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <For each={tasks} render={(item) => <TodoItem {...item} />} />
      </AccordionDetails>
    </TodoOlderTasksContainer>
  );
};

export default TodoOlderTasks;
