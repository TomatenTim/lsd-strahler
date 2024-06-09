'use client';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { green, grey, purple, pink } from '@mui/material/colors';
import { ReactNode } from 'react';

const theme = createTheme({
  palette: {
    mode: 'dark',
      
    primary: {
      main: pink[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}