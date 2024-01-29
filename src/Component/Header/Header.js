import React, { useState, useEffect } from "react";
import axios from "axios";
const Header = () => {
  const APi_URL ='http://192.168.0.60:4000/'
  const [clickCount, setClickCount] = useState(0);
  const [getCategory, setCategory] = useState([]);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (clickCount === 1) {
      // Handle single click action here
      const hamburger = document.querySelector(".hamburger-edit");
      const navMenu = document.querySelector(".nav-menu");
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    } else if (clickCount === 2) {
      // Handle double click action here
      setClickCount(0); // Reset click count
    }

    // Cleanup the click count after a delay
    const timeout = setTimeout(() => {
      setClickCount(0);
    }, 300);

    return () => clearTimeout(timeout); // Cleanup the timeout on component unmount
  }, [clickCount]);


  useEffect(()=>{
    const getAllCategory = async () => {
      try {
        const response = await axios.get(`${APi_URL}admin/products/getAllCategory`);
        console.log(response)
        setCategory(response.data)
      } catch (error) {
        console.log(error)
      }
    };
    getAllCategory()
  },[])



  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light nvbar-edit ">
          <div onClick={handleClick} className="hamburger-edit">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <a className="navbar-brand logo-edit  d-block d-lg-none" href="#">
            LOGO
          </a>
          <ul className="navbar-nav  navIcons-top    d-flex  d-lg-none">
            <li className="nav-item">
              <a className="nav-link menubar-items" href="#">
                <img
                  src="/images/menubar/Interface - Heart_01.svg"
                  className="icooons"
                  alt=""
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menubar-items" href="">
                <img
                  src="/images/menubar/bag-2-svgrepo-com.svg"
                  className="icooons"
                  alt=""
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menubar-items" href="#">
                <img
                  src="/images/menubar/profile-svgrepo-com.svg"
                  className="icooons"
                  alt=""
                />
              </a>
            </li>
          </ul>

          <div className=" navbar-collapse nav-menu navlist-top">
            <a className="navbar-brand logo-edit  d-none d-lg-flex" href="#">
              LOGO
            </a>
            <div className="navbar-nav mr-auto navUl-edit  ">
              <form className=" search-boxTop d-none d-lg-block" role="search">
                <input
                  className="form-control me-2 search-inpBox"
                  type="search"
                  placeholder="What are you shopping for?"
                  aria-label="Search"
                />
                <img
                  src="/images/menubar/search.svg"
                  className="search-icon"
                  alt=""
                />
              </form>
              <div className="bottom-nav d-lg-none">
                <ul className="categories-top list-unstyled">
                  <li className="product-categoriesLIst Menu-top">Menu</li>
                  <li className="product-categoriesLIst">
                    Mobile &accesocories
                  </li>
                  <li className="product-categoriesLIst">
                    Camera &accesocories
                  </li>
                  <li className="product-categoriesLIst">
                    Laptop &accesocories
                  </li>
                  <li className="product-categoriesLIst">Laptop</li>
                  <li className="product-categoriesLIst">Laptop</li>
                  <li className="product-categoriesLIst">Laptop</li>
                  <li className="product-categoriesLIst">
                    Laptop &accesocories
                  </li>
                  <li className="product-categoriesLIst">
                    Wearable &accesocories
                  </li>

                  <li className="product-categoriesLIst">Headphones</li>
                </ul>
              </div>
            </div>

            <ul className="navbar-nav  d-none d-lg-flex ">
              <li className="nav-item">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle language-select"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="/images/menubar/profile-svgrepo-com.svg"
                      className="icooons"
                      alt=""
                    />
                    language
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Anothe
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Somethi
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link menubar-items" href="#">
                  <img
                    src="/images/menubar/Interface - Heart_01.svg"
                    className="icooons"
                    alt=""
                  />
                  Wishlist
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menubar-items" href="#">
                  <img
                    src="/images/menubar/bag-2-svgrepo-com.svg"
                    className="icooons"
                    alt=""
                  />
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menubar-items" href="#">
                  <img
                    src="/images/menubar/profile-svgrepo-com.svg"
                    className="icooons"
                    alt=""
                  />
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="bottom-nav d-none d-lg-block">
          <ul className="categories-top list-unstyled">
          {getCategory.map(product => (
            <li className="nav-item dropdown edit-NVItems">
              <a
                className="nav-link dropdown-toggle edit-home"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {product?.categoryName}<img className="down-arrow" src="/images/menubar/downArrow.svg" alt="icon"/>
              </a>
              <div
                className="dropdown-menu Drop-Menu"
                aria-labelledby="navbarDropdown"
              >
                <ul className="dropBox-Data">
                  <li className="edit-lists">
                    <button className="HeaderLogin-btn">login</button>
                  </li>
                  <li className="edit-lists">
                    <button className="OpnDemo-btn">Open demo</button>
                  </li>
                </ul>
                <ul className="dropBox-Data">
                  <li className="edit-lists">
                    <a className="dropdown-item Box-items " href="/">
                      Products{" "}
                    </a>
                  </li>
                  <li className="edit-lists">
                    <a class="dropdown-item Box-items" href="/">
                      Trading Acounts
                    </a>
                  </li>
                </ul>
              </div>
            </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
