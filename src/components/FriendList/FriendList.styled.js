import styled from 'styled-components';

export const ListOfFriends = styled.ul`
  width: 340px;
  margin: 0 auto;
  margin-bottom: 40px;
`;
export const FriendItem = styled.li`
  height: 60px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 7px 5px 15px 0px rgba(160, 158, 160, 0.6);
  border-radius: 5px;
  margin-bottom: 8px;
`;
export const Avatar = styled.img`
  display: block;
  width: 48px;
`;
export const Name = styled.p`
  color: #050505;
  font-size: 18px;
  line-height: 1.22;
`;
export const Status = styled.span`
  margin-left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
