import Degree from './Degree'
import { Container } from '@chakra-ui/react'

import {
  getHumidityValue,
  getWindDirection,
  getPop,
} from './../helpers'

import { forecastType } from '../types'
import Tile from './Tile'

type Props = {
  data: forecastType
}

const Forecast = ({ data }: Props) => {
  const today = data.list[0]

  return (
    <Container display="flex" flexDirection="column" bg="gray" p="5" borderRadius="15">
      <div>
        <section>
          <h2>
            {data.name} <span>{data.country}</span>
          </h2>
          <h1>
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <p>
            {today.weather[0].main} ({today.weather[0].description})
          </p>
          <p>
            Max: <Degree temp={Math.ceil(today.main.temp_max)} /> {' '}
            Min: <Degree temp={Math.floor(today.main.temp_min)} />
          </p>
        </section>

        <section className="flex flex-wrap justify-between text-zinc-700">

          <Tile
            icon="wind"
            title="Wind"
            info={`${Math.round(today.wind.speed)} km/h`}
            description={`${getWindDirection(
              Math.round(today.wind.deg)
            )}, gusts 
            ${today.wind.gust.toFixed(1)} km/h`}
          />
          <Tile
            icon="feels"
            title="Feels like"
            info={<Degree temp={Math.round(today.main.feels_like)} />}
            description={`Feels ${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? 'colder'
                : 'warmer'
            }`}
          />
          <Tile
            icon="humidity"
            title="Humidity"
            info={`${today.main.humidity} %`}
            description={getHumidityValue(today.main.humidity)}
          />
          <Tile
            icon="pop"
            title="Precipitation"
            info={`${Math.round(today.pop * 100)}%`}
            description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
          />
        </section>
      </div>
    </Container>
  )
}

export default Forecast