import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import appLogo from "@/app/images/LSDStrahler.png";
import StartButton from '@/components/StartButton';


export default function Home() {

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Typography variant='h1' sx={{ textAlign: 'center' }}>LSD Strahler</Typography>
      <Image src={appLogo} alt='Logo'/>
      <StartButton />
    </Box>
  );
}

function MyComponent() {

}