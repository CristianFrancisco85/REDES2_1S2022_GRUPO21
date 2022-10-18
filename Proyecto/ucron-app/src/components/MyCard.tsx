import React from 'react'
import { Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

interface Props {
    title: string,
    description: string,
}


export const MyCard = (props:Props) => {

    const {title, description} = props;

  return (
    <Card sx={{ 
        width: 300,
        padding: 4,
        borderRadius: 5,
        border: '1px solid #a1a1a1',
        margin: 5,
    }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Puesto
            </Typography>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Descripcion
            </Typography>
            <Typography variant="body2">
                {description}
            </Typography>
        </CardContent>
    </Card>
  )
}
