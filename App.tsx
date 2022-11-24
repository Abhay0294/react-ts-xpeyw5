import * as React from 'react';
import './style.css';

export default function App() {
  const DummyData = [
    {
      id: 1,
      name: 'Abhay',
      class: 12,
    },
    {
      id: 2,
      name: 'Abhay',
      class: 12,
    },
    {
      id: 3,
      name: 'Abhay',
      class: 12,
    },
    {
      id: 4,
      name: 'Abhay',
      class: 12,
    },
  ];

  return (
    <div className='container-div'>
      <p>Message Diassembler</p>
      <div className="console-view">
        <div className="table-container">
          <ul>
            {DummyData.map((data) => {
              return (
                <li key={data.id}>
                  <p>{data.name}</p>
                  <input type="number"></input>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="table-container">
          <ul>
            {DummyData.map((data) => {
              return (
                <li key={data.id}>
                  <p>{data.name}</p>
                  <input type="number"></input>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
