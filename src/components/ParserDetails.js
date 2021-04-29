import React, { useState, useEffect } from 'react';

import axios from 'axios';
import loading from './loading.gif';

import ExportCSV from './ExportCSV';

export default function Parser(props) {
  console.log(props);
  const [parser, setParser] = useState([]);
  const [loadingScreen, setLoadingScreen] = useState(false);
  useEffect(() => {
    console.log(props.location.state.categories);
    axios
      .post('https://parserss.herokuapp.com/api/post', {
        categories: props.location.state.categories,
        additional: props.location.state.additional,
      })
      .then((result) => {
        setLoadingScreen(true);
        const results = [].concat.apply([], result.data);
        console.log(results);
        setParser(results);
        console.log(result.data);
      })
      .catch((result) => {
        setLoadingScreen(true);
        const results = ['Попытка парсинга была неудачна'];
        setParser(results);
        console.log(result.data);
      });
  }, []);

  const deleteItem = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    setParser(parser.filter((val) => e.target.name !== val.articul));
  };

  return (
    <div className="parsing-background checkbox-category-background">
      <div className="parsing-details checkbox-list">
        <h2>Результат работы парсера:</h2>
        {!loadingScreen ? (
          <img className="loadingImage" src={loading} alt="loading..." />
        ) : (
          ''
        )}
        <div>
          {parser.map((val) => {
            return (
              <div className="card" key={val.articul}>
                <h1>{val.name}</h1>

                <p>Категория: {val.category}</p>
                <p>Артикул: {val.articul}</p>
                <div className="card-details">
                  <img
                    className="card-img"
                    src={'https://www.emkafashion.ru/' + val.img}
                    alt=""
                  />
                  <p className="card-desc">{val.description}</p>
                  {/* <p className="card-descList">{val.descList}</p> */}
                  <p className="card-descList">
                    {val.descList.map((elem) => (
                      <div>{elem}</div>
                    ))}
                  </p>
                </div>
                <button
                  name={val.articul}
                  onClick={(e) => {
                    if (window.confirm('Подтвердите действие удаления'))
                      deleteItem(e);
                  }}
                >
                  Удалить
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="parsing-bottom">
        <div className="parsing-button ">
          <ExportCSV
            csvData={['this.state.customers']}
            fileName={'Спарсенная информация'}
          />
          {/* <button
            onClick={(e) => exportToCSV(csvData, fileName)}
            className="btn btn-success"
          >
            Скачать в формате Excel
          </button> */}
        </div>
      </div>
    </div>
  );
}
