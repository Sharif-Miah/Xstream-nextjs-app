import SingleVideoDetail from '@/components/singleVideoDetail';

const singleVideoDetailsPage = ({ params: { id, lang } }) => {
  return (
    <SingleVideoDetail
      id={id}
      lang={lang}
    />
  );
};

export default singleVideoDetailsPage;
