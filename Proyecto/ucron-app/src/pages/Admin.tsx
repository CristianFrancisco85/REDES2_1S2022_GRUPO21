import React from 'react'
import Box from '@mui/material/Box';
import { ResumeCard } from '../components/ResumeCard';
import { useUsers } from '../api/useUsers';
import { Grid } from '@mui/material';

export const Admin = () => {

  const admins = useUsers()


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

      <h1>Administradores</h1>
      <br></br>

      <Grid container spacing={2} sx={{
        justifyContent: 'center',
      }}>

        {admins.map((admin) => (
          <ResumeCard
            id={admin.id}
            img={admin.img}
            puesto={admin.puesto}
            name={admin.name}
            carnet=""
            curso=""
            description={admin.description}
          />
        ))}

      </Grid>

    </Box>
  )
}
