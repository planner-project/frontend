import { styled } from 'styled-components';
import { PlanBoxAddBtn } from './Button';
import { Typo } from './Typo';

const PlanBoxContainer = styled.div`
  width: auto;
  height: auto;
  overflow-x: auto;
`
const PlanBox = () => {
  return (
    <PlanBoxContainer>
      <PlanBoxAddBtn><Typo>일정 박스 추가</Typo></PlanBoxAddBtn>
    </PlanBoxContainer>
  );
}

export default PlanBox;