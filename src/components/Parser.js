import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Parser() {
  const [boxes, setBoxes] = useState([]);
  const [error, setError] = useState('');
  const [additionalInput, setAdditionaInput] = useState('');

  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const checkboxHandler = (e) => {
    if (e.target.checked) {
      setBoxes([...boxes, e.target.value]);
    }
    if (!e.target.checked) {
      setBoxes(boxes.filter((value) => value !== e.target.value));
    }
  };

  const parseHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    if ((boxes.length || additionalInput) === 0) {
      setError('Вы не выбрали ни одной категории!');
    } else {
      history.push({
        pathname: '/parsing-details',
        state: { categories: boxes, additional: additionalInput },
      });
    }
    setLoading(false);
    // console.log(boxes);
  };

  const changeInput = (e) => {
    e.preventDefault();
    setAdditionaInput(e.target.value);
  };

  return (
    <div className="parsing-background checkbox-category-background">
      <div className="parsing-details checkbox-list">
        <h2>Выберите категории для парсинга:</h2>
        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}
        <div className="checkbox-category">
          <div className="checkbox-list-column">
            <label>
              <input
                type="checkbox"
                value="News"
                onChange={(e) => {
                  checkboxHandler(e);
                }}
              />
              Новинки
            </label>
            <label>
              <input
                type="checkbox"
                value="Jackets"
                onChange={(e) => {
                  checkboxHandler(e);
                }}
              />
              Куртки рубашечного кроя
            </label>
            <label>
              <input
                type="checkbox"
                value="Outerwear"
                onChange={(e) => {
                  checkboxHandler(e);
                }}
              />
              Верхняя одежда
            </label>
            <label>
              <input
                type="checkbox"
                value="Vests"
                onChange={(e) => {
                  checkboxHandler(e);
                }}
              />
              Жакеты, жилеты
            </label>
            <label>
              <input
                type="checkbox"
                value="Blouses"
                onChange={(e) => {
                  checkboxHandler(e);
                }}
              />
              Блузки, топы, рубашки
            </label>
            <label>
              <input
                type="checkbox"
                value="Shirts"
                onChange={(e) => {
                  checkboxHandler(e);
                }}
              />
              Футболки, худи, свитшоты
            </label>
          </div>
          <div className="checkbox-list-column">
            <label>
              <input
                type="checkbox"
                value="Sweater"
                onChange={(e) => {
                  checkboxHandler(e);
                }}
              />
              Свитеры, водолазки
            </label>
            <label>
              <input
                type="checkbox"
                value="Dresses"
                onChange={(e) => {
                  checkboxHandler(e);
                }}
              />
              Платья
            </label>
            <label>
              <input
                type="checkbox"
                value="Pants"
                onChange={(e) => {
                  checkboxHandler(e);
                }}
              />
              Брюки, шорты
            </label>
            <label>
              <input
                type="checkbox"
                value="Skirts"
                onChange={(e) => {
                  checkboxHandler(e);
                }}
              />
              Юбки
            </label>
            <label>
              <input
                type="checkbox"
                value="Accessories"
                onChange={(e) => {
                  checkboxHandler(e);
                }}
              />
              Аксессуары
            </label>
            <label>
              <input
                type="checkbox"
                value="Shoes"
                onChange={(e) => {
                  checkboxHandler(e);
                }}
              />
              Обувь
            </label>
          </div>
        </div>
      </div>
      <div className="additionalInput">
        <input
          placeholder="Вы можете вставить отдельную ссылку для парсинга"
          onChange={(e) => changeInput(e)}
        ></input>
      </div>
      <div className="parsing-bottom">
        <div className="parsing-button ">
          <button
            disabled={loading}
            onClick={(e) => {
              parseHandler(e);
            }}
            className="btn btn-success"
          >
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
}
