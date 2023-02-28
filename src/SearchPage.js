import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow';
import TuneIcon from '@mui/icons-material/Tune';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_filter'>
        <TuneIcon/>
        <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow
          image="https://pbs.twimg.com/profile_images/1184114794103595010/021TqaVX_400x400.jpg"
          name="Dhiren Rajesh"
          subs="690k subscribers"
          videos="420 videos"
          description="Hello I'm Dhiren"
        />
    </div>
  )
}

export default SearchPage
