import styled from "styled-components";

const SearchWrap = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  padding: 0 50px 0;
  width: 100%;
  height: 50px;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  box-sizing: border-box;
  background-image: url("search.png");
  background-repeat: no-repeat;
  background-position: left 10px center;
  &::placeholder {
    color: #98a2b3;
    font-size: 1rem;
  }
  &:focus {
    outline: none;
  }
`;

const SearchList = styled.ul`
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  min-height: 150px;
  border: 1px solid #cfcfcf;
  border-top: none;
  background: #fff;
  position: absolute;
  top: 50px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5px;
  padding: 0 10px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #f7f7f7;
  }
`;

export { SearchWrap, SearchInput, SearchList, ListItem };
