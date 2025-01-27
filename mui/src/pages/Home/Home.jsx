import { Box, IconButton, Paper, Typography, useTheme } from '@mui/material';
import './Home.css';
import { Close } from '@mui/icons-material';
import { useEffect, useState } from 'react';

function getTotalExpenses(data) {
  return data.reduce((acc, e) => (acc += e.price), 0);
}

export default function Home() {
  const theme = useTheme();
  const [data, setData] = useState({ total: 0, expenses: [] });

  async function getData() {
    let response;
    try {
      response = await fetch('http://localhost:3100/mydata');
    } catch (err) {
      throw new Error('cannot get data!');
    }

    if (!response.ok) {
      throw new Error('error with response data!');
    }

    const data = await response.json();
    const total = getTotalExpenses(data);
    setData({ total, expenses: data });
  }
  useEffect(() => {
    getData();
  }, []);

  function deleteItemHandler(id) {
    fetch('http://localhost:3100/mydata/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => getData());
  }

  return (
    <Box>
      {data.expenses.map((item) => (
        <Paper
          key={item.id}
          sx={{
            width: '366px',
            display: 'flex',
            justifyContent: 'space-between',
            mt: '22px',
            pt: '27px',
            pb: '7px',
            position: 'relative',
          }}
        >
          <Typography sx={{ ml: '16px', fontSize: '1.3em' }} variant="h6">
            {item.title}
          </Typography>
          <Typography
            sx={{
              mr: '33px',
              fontWeight: 500,
              fontSize: '1.4em',
              opacity: '0.8',
            }}
            variant="h6"
          >
            ${item.price}
          </Typography>
          <IconButton
            onClick={() => deleteItemHandler(item.id)}
            sx={{ position: 'absolute', top: '0', right: '0' }}
          >
            <Close />
          </IconButton>
        </Paper>
      ))}
      <Typography sx={{ mt: '16px', textAlign: 'center' }} variant="h6">
        👉🏼 You Spend ${data.total}
      </Typography>
    </Box>
  );
}
