'use client';

import { Box, Button, Fade, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Home() {

  
  const router = useRouter();
  let [showMenu, setShowMenu] = useState(false);
  let [color, setColor] = useState('');
  let [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {

    const lsdConfig:LSDConfig = {
      speed: 100,
      colors: [
        '#ff0000',
        '#ffc800',
        '#ffff00',
        '#00ff00',
        '#00ffff',
        '#0000ff',
        '#ff00ff',
      ],
    }
    
    const interval = setInterval(() => {
      
      setColor(lsdConfig.colors[colorIndex]);
      setColorIndex((colorIndex + 1) % lsdConfig.colors.length);

    }, 1000 / lsdConfig.speed);
    return () => clearInterval(interval);
  })


  const handleBackButton = () => {
    router.push('/');
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: color,
      padding: 2,
    }}>
      <Box
        onMouseOver={() => setShowMenu(true)}
        onMouseOut={() => setShowMenu(false)}
        sx={{
          display: 'inline-block'
        }}
      >
        <Fade 
          in={showMenu}
        >
          <Typography 
            variant='button' 
            sx={{ 
              filter: 'invert(1);',
              fontSize: 60, 
              color: color,
              cursor: 'pointer',
            }}
            onClick={handleBackButton}
          >
            Back
          </Typography>
        </Fade>
      </Box>
    </Box>
  );
}
