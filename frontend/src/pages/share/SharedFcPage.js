import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import FullcourseTag from '../../components/share/SharedFcTag';
import SharedFcList from '../../components/share/SharedFcList';
import SortSelect from '../../components/share/SortSelect';
import TitleText from '../../components/user/profile/TitleText';
import { fetchSharedFc } from '../../features/share/shareActions';
import { Pagination } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Wrapper = styled.div`
  margin: 0 20%;
  position: relative;
  .icon {
    position: relative;
    right: 50px;
    top: 5px;
    cursor: pointer;
  }
`;
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const Input = styled.input`
  width: 32vw;
  min-width: 350px;
  height: 40px;
  margin: 10px 10px 10px 60px;
  padding: 3px;
  font-size: 1rem;
  text-align: center;
  border: 0.5px solid #0aa1dd;
  border-radius: 5rem;
  background-color: rgba(217, 239, 255, 1);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  font-family: Tmoney;
  outline: none;
  &:focus {
    background-color: #eef8ff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 30%);
    transition: 0.5s;
  }
`;
const Button = styled.button`
  margin-bottom: 4vh;
  @media only screen and (min-device-width: 375px) and (max-device-width: 479px) {
    margin: 2vh 0;
  }
  outline: 0;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1rem;
  background: linear-gradient(
    90deg,
    rgba(217, 239, 255, 1) 100%,
    rgba(164, 216, 255, 1) 100%
  );
  box-shadow: 3px 3px 5px rgba(164, 216, 255, 0.64);
  color: darkslategray;
  border: solid 2px #ffffff00;
  &:hover {
    background: #ffffff;
    color: #4b94ca;
    border-color: #4b94ca;
    transition: 0.3s;
  }
`;

const FullcourseShare = () => {
  const dispatch = useDispatch();
  const { sharedFcList } = useSelector((state) => state.share);
  const { checkedTagList } = useSelector((state) => state.share);
  const { checkedDayTagList } = useSelector((state) => state.share);
  const [maxPageNum, setMaxPageNum] = useState(null);
  const [pageNum, setPageNum] = useState(0);
  const [place, setPlace] = useState('');

  useEffect(() => {
    if (sharedFcList !== null) {
      let tmp = sharedFcList.totalElements;
      let result = parseInt(tmp / 9);
      let remainder = tmp % 9;
      console.log(result, remainder);
      if (remainder === 0) {
        setMaxPageNum(result);
      } else {
        setMaxPageNum(result + 1);
      }
    }
  }, [sharedFcList]);

  useEffect(() => {
    dispatch(
      fetchSharedFc({ checkedTagList, checkedDayTagList, place, pageNum }),
    );
    window.scrollTo(0, 0);
  }, [dispatch, checkedTagList, checkedDayTagList, pageNum]);

  const onClickPage = (e) => {
    const nowPage = parseInt(e.target.outerText);
    console.log(nowPage);
    setPageNum(nowPage - 1);
  };

  const onClickSearch = (e) => {
    console.log(place);
  };

  const onFocus = (e) => {
    e.target.placeholder = '';
  };

  const onChange = (e) => {
    setPlace(e.target.value);
    if (e.target.value.length == 0) {
      e.target.placeholder = '가고싶은 장소를 입력하세요';
    }
  };

  return (
    <div>
      <Wrapper>
        <TitleText className="ttl" content="풀코스 검색"></TitleText>
        <Input
          placeholder="가고싶은 장소를 입력하세요"
          onFocus={onFocus}
          onChange={onChange}
        ></Input>
        <SearchOutlinedIcon className="icon" onClick={onClickSearch} />
        {/* <Button>검색</Button> */}
      </Wrapper>

      <FullcourseTag />
      <SortSelect />
      <SharedFcList />

      <PaginationWrapper>
        {sharedFcList ? (
          <Pagination
            count={maxPageNum}
            color="primary"
            showFirstButton
            showLastButton
            defaultPage={1}
            boundaryCount={2}
            onChange={onClickPage}
          />
        ) : null}
      </PaginationWrapper>
    </div>
  );
};

export default FullcourseShare;
