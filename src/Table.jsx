import React from 'react'




const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
            <td><img src={item.imageSrc} alt="User" /></td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default Table;