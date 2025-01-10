import Modal from '@/components/Modal';
import SingleVideoDetail from '@/components/SingleVideoDetail';

const PhotoModal = ({ params: { lang } }) => {
  return (
    <div>
      <Modal>
        <SingleVideoDetail lang={lang} />
      </Modal>
    </div>
  );
};

export default PhotoModal;
