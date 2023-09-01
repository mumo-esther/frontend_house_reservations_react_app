import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHouses } from '../redux/houses/housesSlice';
import '../styling/Home.css';

const HomePage = () => {
  const [left, setLeft] = useState(0);
  const dispatch = useDispatch();
  const { houses } = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const scrollContainerRef = useRef(null);

  const handleRightScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({ left: 300, behavior: 'smooth' });
      setLeft(container.scrollLeft);
    }
  };

  const handleLeftScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({ left: -300, behavior: 'smooth' });
      setLeft(container.scrollLeft);
    }
  };

  return (
    <>
      <div className="right-content">
        <div className="select">
          <h1>LATEST HOUSES</h1>
          <p>Please select a house</p>
        </div>
        <div className="homepage">
          <div className="house-control1">
            <button
              className={`${left === 0 && 'disabledButton'}`}
              type="button"
              disabled={left === 0}
              onClick={handleLeftScroll}
            >
              {'<'}
            </button>
          </div>
          <div className="house-container" ref={scrollContainerRef}>
            {houses.length > 0 ? (
              houses.map((house) => (
                <Link
                  to={`/House/${house.id}`}
                  key={house.id}
                  className="house-item"
                >
                  <img src={house.icon} alt={house.house_name} />
                  <h3>{house.house_name}</h3>
                  <div className="bullets">
                    &#x2022;  &#x2022;  &#x2022;  &#x2022;  &#x2022;  &#x2022;
                    &#x2022;  &#x2022;  &#x2022;  &#x2022;  &#x2022;  &#x2022;
                    &#x2022;  &#x2022;  &#x2022;  &#x2022;  &#x2022;  &#x2022;
                    &#x2022;  &#x2022;  &#x2022;  &#x2022;  &#x2022;  &#x2022;
                    &#x2022;  &#x2022;  &#x2022;  &#x2022;  &#x2022;  &#x2022;
                  </div>
                  <p>{house.description}</p>
                </Link>
              ))
            ) : (
              <p>No houses available</p>
            )}
          </div>
          <div className="house-control2">
            <button
              className={`${
                scrollContainerRef?.current?.scrollWidth - left
                === scrollContainerRef?.current?.clientWidth
                  ? 'disabledButton'
                  : ''
              }`}
              disabled={
                scrollContainerRef?.current?.scrollWidth - left
                === scrollContainerRef?.current?.clientWidth
              }
              type="button"
              onClick={handleRightScroll}
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
