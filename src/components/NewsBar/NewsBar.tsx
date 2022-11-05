import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box } from '@mui/material';
import { If } from '../RenderUtils';
import { useInterfaceContext } from '../../contexts/InterfaceContext';

const NewsBar = () => {
  const { isLoading, data } = useQuery(['todos'], () =>
    fetch(
      'https://content.guardianapis.com/search?api-key=9ce1ecab-896e-41bf-b3ab-66ff3fd8e352',
    ).then((res) => res.json()),
  );
  const { showNews } = useInterfaceContext();

  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 10,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <If isTrue={showNews}>
        <Box
          sx={{
            textAlign: 'center',
            display: 'inline-block',
            color: '#fff',
            animation: '15s linear 0s infinite normal none running text',
            paddingLeft: '100%',
            whiteSpace: 'nowrap',
            '@keyframes text': {
              '100%': {
                transform: 'translateX(-100%)',
              },
            },
          }}
        >
          <If isTrue={!isLoading}>{data?.response.results[0].webTitle}</If>
        </Box>
      </If>
    </Box>
  );
};

export default NewsBar;
