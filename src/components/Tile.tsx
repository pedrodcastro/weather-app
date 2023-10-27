import Feels from './Icons/Feels'
import Humidity from './Icons/Humidity'
import Pop from './Icons/Pop'
import Wind from './Icons/Wind'
import { Flex, Text } from '@chakra-ui/react'

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'pop'
  title: string
  info: string | JSX.Element
  description?: string | JSX.Element
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  pop: Pop,
}

const Tile = ({ icon, title, info }: Props): JSX.Element => {
  const Icon = icons[icon]

  return (
    <Flex gap="2" p="2" direction="column" alignItems="center" borderWidth={2} borderColor={'black'} borderRadius={15}>
      <Icon /> 
      <Text fontWeight={600}>{title}</Text>

      <Text>{info}</Text>

    </Flex>
  )
}
export default Tile