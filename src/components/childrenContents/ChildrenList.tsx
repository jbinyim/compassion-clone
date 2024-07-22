import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { ChildI, getBabyInfo } from "../../api";

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
  const [displayedItems, setDisplayedItems] = useState<ChildI[]>([]); // 이미 출력된 아이템을 저장하는 상태
  const [itemsToShow, setItemsToShow] = useState(6); // 현재 보여줄 아이템 수
  const { data, isLoading } = useQuery<ChildI[]>({
    queryKey: ["babyList"],
    queryFn: getBabyInfo,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.length === 0) return <div>No data available</div>;

  const shuffledData = [...data].sort(() => 0.5 - Math.random());

  const getNewItems = () => {
    // 아직 출력되지 않은 아이템 필터링
    const remainingItems = shuffledData.filter(
      (item) => !displayedItems.includes(item)
    );

    // 남은 아이템이 없으면 더 이상 추가할 수 없음
    if (remainingItems.length === 0) {
      alert("모든 아이템을 다 출력했습니다!"); // 모든 아이템이 출력되었음을 알림
      return;
    }

    // 새로운 아이템을 선택
    const newItems = remainingItems.slice(0, itemsToShow);
    setDisplayedItems((prev) => [...prev, ...newItems]); // 새로운 아이템을 기존 아이템 목록에 추가
    setItemsToShow(itemsToShow + 6); // 보여줄 아이템 수를 6개 늘림
  };

  if (displayedItems.length === 0) {
    getNewItems();
  }

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
        <List>
          <ul>
            {displayedItems.map((item, index) => (
              <li key={index}>{item.name}</li> // 배열의 각 요소에 맞게 수정하세요.
            ))}
          </ul>
          {displayedItems.length < data.length && ( // 모든 아이템이 출력되지 않았을 경우에만 "더보기" 버튼 표시
            <button onClick={getNewItems}>더보기</button>
          )}
        </List>
      </Inner>
    </Container>
  );
};

export default ChildrenList;
