import React from 'react'
import { useAppContext } from '../context/AppContext'
import LaunchCard from './LaunchCard';

const LaunchesList = () => {
  const { launches } = useAppContext();

  console.log('launches', launches)

  return (
    <>
      <div>LaunchesList</div>
      {launches.map((launch) => <LaunchCard launch={launch} key={launch.id}/>)}
    </>
    
  )
}

export default LaunchesList