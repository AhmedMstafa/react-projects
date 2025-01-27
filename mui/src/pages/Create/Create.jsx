import { Box, Button, InputAdornment, styled, TextField } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Create.css';
import { purple } from '@mui/material/colors';
import { useActionState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.ahmed.main,
  '&:hover': {
    // @ts-ignore
    backgroundColor: theme.palette.ahmed.main,
    scale: '0.99',
  },
}));

export default function Create() {
  const navigate = useNavigate();
  // @ts-ignore
  const formRef = useRef();
  const [state, formAction, isLoading] = useActionState(
    addTransactionHandler,
    false
  );

  function addTransactionHandler(prev, formData) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = {
      title: formData.get('title'),
      price: Number(formData.get('price')),
    };

    if (data.transaction === '' || data.price === 0) {
      return false;
    }

    fetch('http://localhost:3100/mydata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      navigate('/');
    });

    formRef.current.reset();
    return true;
  }

  // @ts-ignore
  // eslint-disable-next-line no-undef
  return (
    <Box
      noValidate
      autoComplete="off"
      ref={formRef}
      sx={{ width: '380px' }}
      component="form"
    >
      <TextField
        fullWidth
        label="Transaction Title"
        id="outlined-start-adornment"
        name="title"
        // @ts-ignore
        // eslint-disable-next-line no-undef
        sx={{ mt: '22px', display: 'block' }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">👉🏼</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />
      <TextField
        fullWidth
        label=" Amount"
        id="outlined-start-adornment"
        name="price"
        sx={{ mt: '22px', display: 'block' }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        variant="filled"
      />

      <ColorButton
        type="submit"
        formAction={formAction}
        sx={{ mt: '22px' }}
        variant="contained"
      >
        {isLoading ? '...Submiting' : 'Submit'}
        <ChevronRightIcon />
      </ColorButton>
    </Box>
  );
}
