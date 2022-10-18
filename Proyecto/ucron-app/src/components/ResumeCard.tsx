import React from 'react'
import Box from '@mui/material/Box';
import { User } from '../models/Models';


export const ResumeCard = (props:User) => {

    const {img, puesto, name, carnet, curso, description} = props;

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #a1a1a1',
        borderRadius: '15px',
        padding: '2.5rem',
        margin: '1rem',
        boxShadow: '0 0 5px #000',
        width: '15em',
        height: '25em',
    }}>
        <img src={img} alt="resume" style={{
            width: '10em',
            height: '10em',
            borderRadius: '50%',
            border: '1px solid #000',
        }}/>

        {puesto?<h3>{puesto}</h3>:null}
        {name?<h3>{name}</h3>:null}
        {curso?<h4>{curso}</h4>:null}
        {carnet?<h4>{carnet}</h4>:null}
        {description?<p>{description}</p>:null}

    </Box>
  )
}
