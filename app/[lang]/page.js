import Hero from '@/components/Hero';
import VideoList from '@/components/VideoList';
import videoDatas from '@/lib/vidoes.json';

export default function Home() {
  return (
    <div className='my-36'>
      <Hero />
      <div className='my-16'>
        <VideoList videoDatas={videoDatas} />
      </div>
    </div>
  );
}
