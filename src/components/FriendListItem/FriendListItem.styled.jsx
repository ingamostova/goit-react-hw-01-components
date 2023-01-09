import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  gap: 10px;
  justify-content: start;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => {
    switch (props.status) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return '#000';
    }
  }};
`;

export const Avatar = styled.img`
  display: block;
  width: 100px;
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: bold;
`;
