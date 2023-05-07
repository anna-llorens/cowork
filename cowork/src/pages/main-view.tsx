import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

const StyledMainView = styled.div`
  margin-left: "2rem";
`;
export const MainView = () => {
  return (
    <StyledMainView>
      <Routes>
        <Route path="/PageA" element={<>PageA</>} />
        <Route path="/PageA/unique" element={<>PageAUn</>} />

        <Route path="/PageB/" element={<>PageB</>} />
        <Route path="/PageB/unique" element={<>PageBun</>} />
      </Routes>
      <div>Need to update content dinamically [wip]</div>
    </StyledMainView>
  );
};
