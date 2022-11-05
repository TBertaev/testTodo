import { Box } from '@mui/material';
import { Switch } from '../Switch/Switch';
import { FC, useState } from 'react';
import { ITask } from '../../type';
import { TodoItemText, TodoItemTitle } from '../Typography';

const TodoItem: FC<ITask> = ({ title, text, isChecked, color }) => {
  const [checked, setChecked] = useState(true);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        '&::before': {
          content: "''",
          display: 'block',
          backgroundColor: color,
          height: 45,
          width: 5,
          borderRadius: 2,
          marginRight: '14px',
        },
        ':last-child': {
          marginBottom: 0,
        },
      }}
    >
      <Box>
        <TodoItemTitle
          sx={{
            textDecoration: checked ? 'line-through' : '',
          }}
        >
          {title}
        </TodoItemTitle>
        <TodoItemText>{text}</TodoItemText>
      </Box>
      <Switch
        sx={{
          marginLeft: 'auto',
        }}
        onChange={() => setChecked((prevState) => !prevState)}
        checked={checked}
      />
    </Box>
  );
};

export default TodoItem;
