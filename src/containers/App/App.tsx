import { Box } from '@mui/material';
import TaskContextProvider from '../../contexts/TaskContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TodoContainer from '../../components/Todo/TodoContainer';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NewsBar from '../../components/NewsBar/NewsBar';
import InterfaceContextProvider from '../../contexts/InterfaceContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <TaskContextProvider>
          <InterfaceContextProvider>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '0 20px' }}>
              <TodoContainer />
              <NewsBar />
            </Box>
          </InterfaceContextProvider>
        </TaskContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
