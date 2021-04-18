import React from 'react';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';

export default function Parser() {
  return (
    <div className="parsing-background">
      <div className="parsing-details"></div>
      <div className="parsing-bottom">
        <div className="parsing-button ">
          <Link to="/parser-category">
            <button className="btn btn-success">Скачать в формате Excel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
