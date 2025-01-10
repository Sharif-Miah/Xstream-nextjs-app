import VideoList from '@/components/VideoList';
import videoDatas from '@/lib/vidoes.json';

const page = () => {
  return (
    <div>
      <VideoList videoDatas={videoDatas} />
    </div>
  );
};

export default page;
