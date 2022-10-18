import { Box, Grid } from '@mui/material'
import React, { useMemo } from 'react'
import { AxisOptions, Chart } from "react-charts";
import { useData } from '../api/useData';

type MyDatum = { marca: number, valor: number }

export const Finanzas = () => {

    const apiData = useData()
    
    const transformData = (filter:string) => {
        const data = apiData.filter((item) => item.serie === filter)
        const dataTransformed:MyDatum[] = data.map((item) => {
            return {
                marca: item.marca,
                valor: item.valor
            }
        })
        console.log(dataTransformed)
        return dataTransformed
    }

    const getGanancias = () =>{
        let ganancias:MyDatum[] = []
        
        for (let i = 0; i < apiData.length; i+=2) {
            ganancias.push({
                marca: apiData[i].marca,
                valor: apiData[i].valor - apiData[i+1].valor
            })
        }
        return ganancias
    }

    const data = [
        {
            label: "Ingresos",
            data: transformData("Ingresos")
        },
        {
            label: "Egresos",
            data: transformData("Egresos")
        }
    ]

    const dataDiff = [
        {
            label: "Ganancias",
            data: getGanancias()
        },
    ]


    const primaryAxis = useMemo<AxisOptions<MyDatum>>(
        () => ({
            getValue: (datum) => datum.marca,
        }),[]
    )

    const secondaryAxes = useMemo<AxisOptions<MyDatum>[]>(
        () => [
        {
            getValue: (datum) => datum.valor,
        },],[]
    )

    if (apiData.length === 0) {
        return <div>Loading...</div>
    }

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
            
            <h1>Finanzas</h1>

            <Grid container spacing={2} sx={{
                justifyContent: 'center',
                marginTop: '2rem',
                padding: '1rem',
            }}>

                <Box sx={{
                    width: '40em',
                    height: '30em',
                    marginX: 'auto',
                }}>
                    <h2>Ingresos vs Egresos</h2>

                    <Chart
                        options={{
                            data,
                            primaryAxis,
                            secondaryAxes,
                        }}
                    />
                </Box>

                <Box sx={{
                    width: '40em',
                    height: '30em',
                    marginX: 'auto',
                }}>
                    <h2>Ganancias</h2>
                            
                    <Chart
                        options={{
                            data: dataDiff,
                            primaryAxis,
                            secondaryAxes,
                        }}
                    />
                </Box>

            </Grid>
            <br/><br/><br/><br/>
            <p>*Cantidades en miles de Quetzales</p>


        </Box>
    )
}

