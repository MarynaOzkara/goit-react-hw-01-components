import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  width: 340px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 7px 5px 15px 0px rgba(160, 158, 160, 0.6);
  margin-bottom: 40px;
`;
export const Avatar = styled.div`
  padding: 48px;
  text-align: center;
`;
export const Picture = styled.img`
  display: block;
  margin: 0 auto;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: #f8f8f8;
  margin-bottom: 16px;
`;
export const Name = styled.h2`
  color: #050505;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  margin-bottom: 8px;
`;
export const Description = styled.p`
  font-size: 16px;
  line-height: 1.28;
  color: rgba(5, 5, 5, 0.5);
  margin-bottom: 8px;
`;
export const Stats = styled.ul`
  height: 100px;
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #e6e4e4;
  border-top: 1px solid rgba(5, 5, 5, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:not(:last-child) {
    border-right: 1px solid rgba(5, 5, 5, 0.2);
  }
`;
export const Label = styled.span`
  font-size: 14px;
  line-height: 1.28;
  color: rgba(5, 5, 5, 0.5);
  margin-bottom: 4px;
`;
export const Quantity = styled.span`
  color: #050505;
  font-size: 18px;
  line-height: 1.22;
  font-weight: 700;
`;
