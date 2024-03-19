import { useParams } from 'react-router-dom';

const Detail = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.id}일차 운동 일지입니다.</div>;
};

export default Detail;
