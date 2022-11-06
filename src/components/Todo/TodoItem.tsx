import { Box } from '@mui/material';
import { Switch } from '../Switch/Switch';
import { FC } from 'react';
import { ITodoItem } from '../../type';
import { TodoItemText, TodoItemTitle } from '../Typography';

const TodoItem: FC<ITodoItem> = ({
  id,
  title,
  text,
  isChecked,
  color,
  changeTodoDone,
}) => {
  const handleChange = () => {
    if (changeTodoDone) {
      changeTodoDone(id);
    }
  };

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
            textDecoration: isChecked ? 'line-through' : '',
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
        onChange={handleChange}
        checked={isChecked}
      />
    </Box>
  );
};

export default TodoItem;
