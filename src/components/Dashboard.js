import React from 'react';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="parsing-background">
      <div className="parsing-details">
        <div className="parsing-photo">
          <img src={logo} alt="logo" />
        </div>
        <div className="parsing-description">
          <div className="float-left">
            <h1>Emkafashion</h1>
          </div>

          <p className="parsing-details-text">
            "Emka Fashion" - успешная компания с 15-летним опытом работы в
            индустрии производства и продажи современной женской одежды оптом.
            Мы предоставляем своим покупательницам выбор того, как они хотят
            выглядеть, предлагая коллекции самых разных направлений и стилей.
            <div className="parsing-credentials float-right">
              <p>
                Email: info@emkafashion.ru <br />
                Сайт: www.emkafashion.ru
              </p>
            </div>
          </p>
        </div>
      </div>
      <div className="parsing-bottom">
        <div className="parsing-button ">
          <Link to="/parser-category">
            <button className="btn btn-success">Начать парсинг</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
