import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Parser(props) {
  console.log(props);
  const [parser, setParser] = useState({});

  useEffect(() => {
    console.log(props.location.state.categories);
    axios.get('http://localhost:3001/api/get', {
      categories: props.location.state.categories,
    });
  });

  const handleExcel = () => {
    console.log(props);
  };

  //   const parseHandler = (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     setError('');
  //     if (boxes.length === 0) {
  //       setError('Вы не выбрали ни одной категории!');
  //     } else {
  //       history.push({
  //         pathname: '/parsing-details',
  //         state: { categories: boxes },
  //       });
  //     }
  //     setLoading(false);
  // console.log(boxes);

  return (
    <div className="parsing-background checkbox-category-background">
      <div className="parsing-details checkbox-list">
        <h2>Результат работы парсера:</h2>
      </div>
      <div className="parsing-bottom">
        <div className="parsing-button ">
          <button
            onClick={() => {
              handleExcel();
            }}
            className="btn btn-success"
          >
            Скачать в формате Excel
          </button>
        </div>
      </div>
    </div>
  );
}
