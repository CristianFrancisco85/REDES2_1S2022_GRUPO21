import { Box, Grid } from '@mui/material'
import React from 'react'
import { usePuestos } from '../api/usePuestos';
import { MyCard } from '../components/MyCard';

export const Publica = () => {

    const data = usePuestos()

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '90vh',
        width: '100vw',
        textAlign: 'center',
    }}>
        
        <h1>Funcion Publica</h1>

        <Grid container spacing={4} sx={{
            justifyContent: 'center',
        }}>

            {data.map((item) => (
                <MyCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                />
            ))}


        </Grid>


    </Box>
  )
}
