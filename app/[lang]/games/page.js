import VideoList from '@/components/VideoList';
import videoDatas from '@/lib/vidoes.json';

const GamesPage = () => {
  return (
    <div>
      <VideoList videoDatas={videoDatas} />
    </div>
  );
};

export default GamesPage;
