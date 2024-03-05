import React from 'react'




const Table1 = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            {/* <th>Image</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th> */}
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
            <td><img src={item.imageSrc} alt={`${item.first_name}`} /></td>
              {/* <td>{item.first_name}</td> */}
              {/* <td>{item.last_name}</td> */}
              {item.blueprint && <td><img src={item.blueprint} alt={`${item.blueprint}`} /></td>}
              <td>{item.email}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default Table1;
