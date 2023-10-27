import Degree from './Degree'
import { Box, Container, Text } from '@chakra-ui/react'

import { forecastType } from '../types'
import Tile from './Tile'

type Props = {
  data: forecastType
}

const Forecast = ({ data }: Props) => {
  const today = data.list[0]
  console.log(today)

  return (
    <Container display="flex" flexDirection="column" alignItems="center" bg="gray" p="5" borderRadius="15">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text fontSize={32}>
            {data.name}, <span>{data.country}</span>
          </Text >
          <Text fontSize={32} fontWeight={700}>
            <Degree temp={Math.round(today.main.temp)} />
          </Text>
          <Text>
            {today.weather[0].description}
          </Text>
          <Text>
            Max: <Degree temp={Math.ceil(today.main.temp_max)} /> {' '}
            Min: <Degree temp={Math.floor(today.main.temp_min)} />
          </Text>
        </Box>

        <Box display="flex" flexDirection="column" gap="2">

          <Tile
            icon="wind"
            title="Vento"
            info={`${Math.round(today.wind.speed)} km/h`}
          />
          <Tile
            icon="feels"
            title="Sensação"
            info={<Degree temp={Math.round(today.main.feels_like)} />}
          />
          <Tile
            icon="humidity"
            title="Humidade"
            info={`${today.main.humidity} %`}
          />
          <Tile
            icon="pop"
            title="Precipitação"
            info={`${Math.round(today.pop * 100)}%`}
          />
        </Box>
    </Container>
  )
}

export default Forecast