import { HeaderTitle } from '../Typography';
import { Box, Button, Popover, Stack, Switch, Typography } from '@mui/material';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import { useState, MouseEvent } from 'react';
import { useInterfaceContext } from '../../contexts/InterfaceContext';

const TodoHeader = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { showNews, setShowNews } = useInterfaceContext();
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box
      sx={{
        padding: '0 17px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <HeaderTitle>To Do</HeaderTitle>
      <Button aria-describedby={id} onClick={handleClick}>
        <SettingsIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Stack direction="row" padding={1} spacing={1} alignItems="center">
          <Typography>Show news </Typography>
          <Switch
            checked={showNews}
            onChange={() => setShowNews((prevState: boolean) => !prevState)}
          />
        </Stack>
      </Popover>
    </Box>
  );
};

export default TodoHeader;
