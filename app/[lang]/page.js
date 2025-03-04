import Hero from '@/components/Hero';
import VideoList from '@/components/VideoList';
import videoDatas from '@/lib/vidoes.json';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='my-36'>
      <Hero />
      <div className='my-16'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-semibold'>Streams of the day</h2>
          <Link
            href='/all-videos'
            className='bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full'>
            View all
          </Link>
        </div>
        <VideoList videoDatas={videoDatas} />
      </div>
    </div>
  );
}
