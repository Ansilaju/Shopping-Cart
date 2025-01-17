import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";

const Filters = () => {
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={"inline-1"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={"inline-2"}
        />
      </span>
      {/* <span>
        <Form.Check
          inline
          label="Include Out Of Stock"
          name="group1"
          type="checkbox"
          id={"inline-3"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={"inline-4"}
        />
      </span> */}
      {/* <span>
        <label style={{ paddingRight: 10 }}></label>
        <Rating rating={byRating} style={{ cursor: "pointer" }} />
      </span> */}
      <Button variant="light">clear filters</Button>
    </div>
  );
};

export default Filters;
