import type { NextPage } from 'next'
import { CardContent, CardHeader, Card, Grid, Typography } from '@mui/material'

import { Layout } from '../components/layouts'


const HomePage: NextPage = () => {
  return (
    <Layout title='trelo'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)'}}>
            <CardHeader title="pendientes"/> 
            <CardContent>

            </CardContent>

          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)'}} >
            <CardHeader title="En Progreso"/>            
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)'}} >
            <CardHeader title="Completadas"/>            
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}

export default HomePage
