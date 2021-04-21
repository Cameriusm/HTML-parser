import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Parser(props) {
  console.log(props);
  const [parser, setParser] = useState([]);

  useEffect(() => {
    console.log(props.location.state.categories);
    axios
      .post('http://localhost:3001/api/post', {
        categories: props.location.state.categories,
      })
      .then((result) => {
        const results = [].concat.apply([], result.data);
        setParser(results);
        console.log(result.data);
      });
  }, []);

  const handleExcel = () => {
    console.log(props);
  };

  return (
    <div className="parsing-background checkbox-category-background">
      <div className="parsing-details checkbox-list">
        <h2>Результат работы парсера:</h2>
        <div>
          {parser.map((val) => {
            return (
              <div className="card" key={val.articul}>
                <img src={val.img} alt="" />
                <h1>{val.name}</h1>
                <p>{val.description}</p>

                <button>Delete</button>
              </div>
            );
          })}
        </div>
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
