import React from 'react'

interface videoBoxProps{
    title: string;
    thumbnailUrl: string;
    duration: string;
    daysAfterPublishing: number;
}

const VideoBox = (props: videoBoxProps) => {
  return (
    <div className='p-2 flex flex-col m-2 w-60 text-white '>
        <div className='relative w-full cursor-pointer'>
            <img src={props.thumbnailUrl} alt="thumbnail" className='object-contain w-full rounded-md'/>
            <span className='absolute bottom-2 right-1 mr-1 bg-slate-500 rounded-sm text-white text-sm px-[1px]'>{props.duration}</span>
        </div>
        <div className='w-full'>
            <p className='text-start w-full flex flex-wrap'>{props.title}</p>
            <span className='text-sm'>{props.daysAfterPublishing} days ago</span>
        </div>
    </div>
  )
}

export default VideoBox