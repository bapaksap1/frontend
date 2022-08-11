import React from "react";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 104,
    padding: '0 30px',
  },
});


const ListSurat = () => {
  const classes = useStyles()
  return (
    <>
      <Navbar>

      </Navbar>
    </>
  )
}

export default ListSurat;

const Navbar = styled.div`
  box-sizing: border-box;
  background-color: #E5E5E5;
  width: 100%;
  height: 44px;
  padding: 8px 0px;
  display: flex;
  gap: 10px;`