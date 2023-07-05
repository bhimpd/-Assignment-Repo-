import React, { useEffect, useState } from "react";
import Samplecard from "./Samplecard";
import { useNavigate } from "react-router-dom";
import MainNav from "./MainNav";

const Home = () => {

  // fetching the api 
  const api = "https://fakestoreapi.com/products";

  const [user, setUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUser(data);
        setFilteredUser(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(api);
  }, []);

  const navigate = useNavigate();

  // to go to the details page of the clicked card
  const handleCardClick = (curUser) => {
    navigate(`/details/${curUser.id}`);
  };


  // searching the product based on the name
  const handleSearch = (searchText) => {
    if (searchText.trim() === "") {
      setFilteredUser(user);
    } else {
      const searchWords = searchText.toLowerCase().split(" ");
  
      const filteredData = user.filter((product) =>
        searchWords.some((word) =>
          product.title.toLowerCase().includes(word)
        )
      );
  
      if (filteredData.length === 0) {
        window.alert("No products found");
      } else {
        setFilteredUser(filteredData);
      }
    }
  };


  return (
    <>
      <MainNav handleSearch={handleSearch} />
      <h2 className="product text-center mt-5">Our Products</h2>
      <hr />
      <Samplecard user={filteredUser} handleCardClick={handleCardClick} />
    </>
  );
};

export default Home;
