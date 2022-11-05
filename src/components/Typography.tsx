import { styled } from '@mui/material';

export const HeaderTitle = styled('div')(() => ({
  fontFamily: 'Actor',
  fontWeight: 400,
  fontSize: '36px',
  lineHeight: '43px',
  color: '#F4F4F4',
}));

export const TodoItemTitle = styled('div')(() => ({
  marginBottom: '2px',
  fontFamily: 'Abhaya Libre',
  fontWeight: 600,
  fontSize: '24px',
  lineHeight: '28px',
  color: '#F4F4F4',
}));

export const TodoItemText = styled('div')(() => ({
  marginBottom: '2px',
  fontFamily: 'Abhaya Libre',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '17px',
  color: 'rgba(255, 255, 255, 0.6)',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  maxWidth: '200px',
  width: '100%',
}));

export const CheckboxLabel = styled('div')(() => ({
  fontFamily: 'Abhaya Libre',
  fontWeight: 600,
  fontSize: '24px',
  lineHeight: '28px',
  color: '#F4F4F4',
}));
