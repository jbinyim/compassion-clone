import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 80px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaSize.xxl} {
    padding: 0 4%;
  }
`;

const ListToggleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 8px;
`;

const ListToggle = styled.button`
  width: 72px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.endeavour};
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
`;

const ToggleIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.endeavour};
`;
const List = styled.div`
  margin-top: 24px;
`;

const ChildrenList = () => {
  return (
    <Container>
      <Inner>
        <ListToggleBox>
          <ListToggle>
            <ToggleIcon viewBox="0 -960 960 960">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </ToggleIcon>
          </ListToggle>
          <ListToggle>
            <ToggleIcon viewBox="0 -960 960 960">
              <path d="M340-540H200q-33 0-56.5-23.5T120-620v-140q0-33 23.5-56.5T200-840h140q33 0 56.5 23.5T420-760v140q0 33-23.5 56.5T340-540Zm-140-80h140v-140H200v140Zm140 500H200q-33 0-56.5-23.5T120-200v-140q0-33 23.5-56.5T200-420h140q33 0 56.5 23.5T420-340v140q0 33-23.5 56.5T340-120Zm-140-80h140v-140H200v140Zm560-340H620q-33 0-56.5-23.5T540-620v-140q0-33 23.5-56.5T620-840h140q33 0 56.5 23.5T840-760v140q0 33-23.5 56.5T760-540Zm-140-80h140v-140H620v140Zm140 500H620q-33 0-56.5-23.5T540-200v-140q0-33 23.5-56.5T620-420h140q33 0 56.5 23.5T840-340v140q0 33-23.5 56.5T760-120Zm-140-80h140v-140H620v140ZM340-620Zm0 280Zm280-280Zm0 280Z" />
            </ToggleIcon>
          </ListToggle>
        </ListToggleBox>
        <List></List>
      </Inner>
    </Container>
  );
};

export default ChildrenList;
