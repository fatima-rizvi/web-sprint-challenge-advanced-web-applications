import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from '../utils/axiosWithAuth';
import fetchColors from '../api/fetchColors'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  // axiosWithAuth()
  //   .get('/colors')
  //   .then((res) => {
  //     //console.log('colors get res: ', res)
  //     setColorList(res.data)
  //   })

  //setColorList(res.data)

  useEffect(() => {
    fetchColors()
      .then((res) => {
        setColorList(res.data)
      })
      .catch((err) => {
        console.log('fetch colors error: ', err)
      })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
