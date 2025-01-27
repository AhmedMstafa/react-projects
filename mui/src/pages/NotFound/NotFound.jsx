import { Box, Typography, useTheme } from '@mui/material';

export default function NotFound() {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h5" color={theme.palette.error.main}>
        Not Found
      </Typography>
    </Box>
  );
}
