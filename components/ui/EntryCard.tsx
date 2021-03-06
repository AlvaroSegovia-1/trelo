/* eslint-disable react/react-in-jsx-scope */
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { FC, DragEvent } from 'react'
import { Entry } from '../../interfaces'

interface Props {
  entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const onDragStart = (event: DragEvent) => {
    console.log(event)
    event.dataTransfer.setData('text', entry._id)

    // todo: modificar el estado, para indicar que estoy haciendo drag
  }

  const onDragEnd = () => {
    // todo: cancelar ondrag
  }

  return (
    <Card
      sx={{ marginBottom: 1 }}
      // Eventos de drag and drop
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
