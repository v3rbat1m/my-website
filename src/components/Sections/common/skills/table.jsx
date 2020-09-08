import React from "react";
import { Table } from "react-bootstrap";

const MyTable = ({ skills }) => {
  return (
    <Table bordered responsive='md' className='my-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody className='table-body'>
        {skills.map((skill) => (
          <tr key={skill.name}>
            <td className='table-name'>{skill.name}</td>
            <td className='table-level'>{skill.level}</td>
            <td className='table-type'>{skill.type}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;
