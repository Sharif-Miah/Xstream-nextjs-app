import VideoList from '@/components/VideoList';
import videoDatas from '@/lib/vidoes.json';

const AllVideos = () => {
  return (
    <div>
      <VideoList videoDatas={videoDatas} />
    </div>
  );
};

export default AllVideos;
