import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

// 스타일 컴포넌트 정의
const PlanContainer = styled.div`
  width: 314px;
  height: 142px;
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px black dashed;
  border-radius: 10px;
  margin-top: 14px;
`;

const Title = styled.h1`
  width: 219px;
  height: 24px;
  font-size: 24px;
  font-family: 'Pretendard', serif;
  font-weight: bold;
`;

const Typo = styled.p`
  font-size: 16px;
  font-family: 'Pretendard', serif;
  font-weight: 700;
`;

const PlanItem = ({ plans }) => {
  // 초기 상태 설정 시 undefined 속성 제거
  const [planData, setPlanData] = useState((plans || {}));

  // plans가 변경될 때마다 planData 업데이트
  useEffect(() => {
    setPlanData(plans);
  }, [plans]);
  
  
  return (
    planData && planData.title ? (
      <PlanContainer>
        <Typo>{planData.title}</Typo>
        <Typo>{planData.address} {planData.time}</Typo>
        <Typo>{planData.content}</Typo>
      </PlanContainer>
    ) : null
  );
}

export default PlanItem;