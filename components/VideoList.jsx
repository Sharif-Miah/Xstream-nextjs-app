import Link from 'next/link';
import VideoCart from './VideoCart';

const VideoList = async ({ videoDatas }) => {
  return (
    <section classNameName='my-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {videoDatas.map((videoData) => (
          <VideoCart
            key={videoData.videoId}
            videoData={videoData}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoList;
