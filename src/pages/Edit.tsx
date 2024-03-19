import { useParams } from 'react-router-dom';

const Edit = () => {
  const params = useParams();
  return <div>{params.id}일차 편집 페이지 입니다.</div>;
};

export default Edit;
