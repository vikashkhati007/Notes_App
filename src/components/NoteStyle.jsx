import styled from "styled-components";

export const NoteStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;
export const DeleteIcon = styled.span`
  &:hover {
    color: red;
  }
  transition: 1s ease;
`;
