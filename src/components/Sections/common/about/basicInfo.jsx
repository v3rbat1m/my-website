import React from "react";

const BasicInfo = () => {
  return (
    <div className="basic-info">
      <h3 className="section-item-header">Basic information</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>Karolis Šarskus</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>k.krivicius@gmail.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>+37060907803</td>
            </tr>
            <tr>
              <td>Date of birth</td>
              <td>18 Sep 1997</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>Pavilnio sodų 6-oji g. 10</td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td>Lithuanian</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
};

export default BasicInfo;
