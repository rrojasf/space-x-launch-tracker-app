import { Launch } from '@space-launch-tracking-app/shared-types';
import React from 'react';

interface LaunchCardProps {
  launch: Launch;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  return (
    <div>{launch.name}</div>
  )
}

export default LaunchCard