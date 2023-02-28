import { Avatar } from '@mui/material'
import React from 'react'
import './ChannelRow.css'
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

function ChannelRow(image, name, subs, videos, description) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow_avatar' src={image}/>
        <div className='channelRow_text'>
            <h4>{name}</h4>
            <p>
                {subs} • {videos}
            </p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow
