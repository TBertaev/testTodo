import { styled } from '@mui/material';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const Container = styled('div')(() => ({
  maxWidth: '390px',
  background: '#222222',
  borderRadius: '30px',
  padding: '13px 20px',
  width: '100%',
  marginTop: '50px',
}));

const TodoContainer = () => {
  return (
    <Container>
      <TodoHeader />
      <TodoList />
    </Container>
  );
};

export default TodoContainer;
