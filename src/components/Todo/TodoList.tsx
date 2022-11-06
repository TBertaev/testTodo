import { Box, Checkbox, FormControlLabel } from '@mui/material';
import TodoItem from './TodoItem';
import { useTasks } from '../../contexts/TaskContext';
import { For, If } from '../RenderUtils';
import { CheckboxLabel } from '../Typography';
import { useInterfaceContext } from '../../contexts/InterfaceContext';
import TodoOlderTasks from './TodoOlderTasks';

const TodoList = () => {
  const { tasks, otherTasks, changeTodoDone } = useTasks();
  const { showTodayTasks, setShowTodayTasks } = useInterfaceContext();
  return (
    <div>
      <FormControlLabel
        sx={{
          marginLeft: '5px',
          fontFamily: 'Abhaya Libre',
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '28px',
          color: '#F4F4F4',
        }}
        control={
          <Checkbox
            sx={{
              '&.Mui-checked': {
                color: '#fff',
              },
            }}
            onChange={() => setShowTodayTasks((prevState) => !prevState)}
            checked={showTodayTasks}
          />
        }
        label={<CheckboxLabel> Today Tasks:</CheckboxLabel>}
      />
      <If isTrue={showTodayTasks}>
        <Box
          sx={{
            borderRadius: '40px',
            marginTop: '15px',
            padding: '16px 25px 18px 17px',
            boxShadow:
              '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
          }}
        >
          <For
            each={tasks}
            render={(item) => <TodoItem {...item} changeTodoDone={changeTodoDone} />}
          />
        </Box>
      </If>
      <For each={otherTasks} render={(item) => <TodoOlderTasks {...item} />} />
    </div>
  );
};

export default TodoList;
