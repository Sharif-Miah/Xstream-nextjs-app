import Link from 'next/link';
import VideoCart from './VideoCart';

const VideoList = async ({ videoDatas }) => {
  return (
    <section classNameName='my-10'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-semibold'>Streams of the day</h2>
        <Link
          href='/'
          className='bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full'>
          View all
        </Link>
      </div>
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
