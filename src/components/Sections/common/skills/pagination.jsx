import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { CardBody } from "reactstrap";

const styles = {
  paginationItemStyle: {
    marginLeft: "5px",
    color: "white",
    "&:hover": {
      backgroundColor: "#772e2e",
    },

    "&:active": {
      color: 'black',
      // backgroundColor: "#92a8d1",
    },
  },
  paginationLinkStyle: {
    backgroundColor: "#b90000",
    borderRadius: "5px",

    "&:hover": {
      backgroundColor: "#772e2e",
    },

    "&:active": {
      backgroundColor: "#772e2e",
    },
  },
};

const MyPagination = ({ totalCount, currentPage, pageSize, onPageChange }) => {
  const itemsInPage = 10;

  let items = [];
  if (totalCount > pageSize) {
    for (let i = 1; i < Math.ceil(totalCount / pageSize) + 1; i++) {
      items.push(
        <Pagination.Item
          // style={styles.paginationItemStyle}
          // bsPrefix='dark'
          className='bg-dark'
          key={i}
          active={i === currentPage}
          onClick={() => {
            onPageChange(i);
          }}
        >
          {i}
        </Pagination.Item>
      );
    }
  }

  return <Pagination className=''>{items}</Pagination>;
};

export default MyPagination;
