import styled from 'styled-components';
import { getRandomHexColor } from '../../constants/getRandomHexColor';

export const Section = styled.section`
  margin: 0 auto;
  width: 340px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 7px 5px 15px 0px rgba(160, 158, 160, 0.6);
  margin-bottom: 40px;
`;
export const Title = styled.h2`
  color: #050505;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  margin-bottom: 24px;
  padding-top: 24px;
  text-align: center;
`;
export const StatList = styled.ul`
  height: 60px;
  display: flex;
  text-align: center;
  justify-content: center;
  border-top: 1px solid rgba(5, 5, 5, 0.2);
`;
export const StatItem = styled.li`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: ${getRandomHexColor};

  &:not(:last-child) {
    border-right: 1px solid rgba(5, 5, 5, 0.2);
  }
`;
export const Label = styled.span`
  font-size: 14px;
  line-height: 1.28;
  color: #ffffff;
  margin-bottom: 4px;
`;
export const Percentage = styled.span`
  color: #ffffff;
  font-size: 18px;
  line-height: 1.22;
  font-weight: 700;
`;
