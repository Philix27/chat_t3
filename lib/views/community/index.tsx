import React from "react";
import styled from "styled-components";
import { SideBar } from "../../comps/sidebar/sidebar";

export default function CommunityView() {
  return (
    <Container>
      <SideBar />
      <Contents>Community</Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0px 50px;
  padding: 10px 20px;
`;
