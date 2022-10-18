import { Box, Grid } from '@mui/material'
import React from 'react'
import { ResumeCard } from '../components/ResumeCard'
import { useUsers } from '../api/useUsers';

export const Devs = () => {

  const devs = useUsers()


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
    
      <h1>Desarolladores</h1>
      <br></br>

      <Grid container spacing={2} sx={{
        justifyContent: 'center',
      }}>


      {devs.map((dev) => (
        <ResumeCard
          id={dev.id}
          img={dev.img}
          puesto=""
          name={dev.name}
          carnet={dev.carnet}
          curso={dev.curso}
          description=""
        />
      ))}

      </Grid>
        
    </Box>
  )
}
