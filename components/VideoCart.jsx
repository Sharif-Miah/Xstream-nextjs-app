import Image from 'next/image';
import Link from 'next/link';

const VideoCart = ({ videoData }) => {
  // console.log(videoData);
  return (
    <Link href={`/videos/${videoData.videoId}`}>
      <div className='rounded-lg overflow-hidden bg-color-gray'>
        <Image
          src={videoData.thumbnail}
          alt='Stream 1'
          className='w-full h-40 object-cover'
          width={100}
          height={160}
        />
        <div className='p-2'>
          <p className='font-semibold'>{videoData.title}</p>
          <p className='text-sm text-gray-400'>{videoData.channelTitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCart;
