import { Badge, Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Launch } from '@space-launch-tracking-app/shared-types';
import React from 'react';
import { useFavorites } from '../hooks/useFavorites';

interface LaunchCardProps {
  launch: Launch;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
console.log('card', launch)
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='elevated'
      _hover={{ boxShadow: 'xl', cursor: 'pointer', transform: 'scale(1.02)', transition: '0.3s ease-in-out' }}
    >
    <Box
        maxW={{ base: '100%', sm: '200px' }}
        w="200px"
        bg="gray.100"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {launch.links.patch.small ? (
          <Image
            objectFit="cover"
            w="100%"
            h="100%"
            src={launch.links.patch.small}
            alt={launch.name}
          />
        ) : (
          // Fallback content when image is not available
          <Box textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="gray.500">
              No Image Available
            </Text>
          </Box>
        )}
      </Box>      
      <Stack>
        <CardBody>
          <Heading size='md'>{launch.name}</Heading>
          <Text py='2'>{new Date(launch.date_utc).toLocaleDateString()} {new Date(launch.date_utc).toLocaleTimeString()}</Text>
          {launch.upcoming ? <Badge colorScheme='blue'>Upcoming</Badge> : 
          <Badge colorScheme={launch.success ? 'green' : 'red'}>
            {launch.success ? 'Success' : 'Failure'}
          </Badge>}
        </CardBody>
        <CardFooter>
          <Button 
            mt={2} 
            onClick={() => toggleFavorite(launch.id)}
            colorScheme={isFavorite(launch.id) ? 'yellow' : 'gray'}
          >
            {isFavorite(launch.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        </CardFooter>
      </Stack>
    </Card>  
  )
}

export default LaunchCard