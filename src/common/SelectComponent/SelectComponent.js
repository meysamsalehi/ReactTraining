import React, { Component } from "react";
import Select from "react-select";
import styles from "./styles.module.css";

const SelectComponent = ({ value, onChange, options, title }) => {
  return (
    <React.Fragment>
      <div className={styles.selectContainer}>
        <span>{title}:</span>
        <Select
          value={value}
          onChange={onChange}
          options={options}
          title={title}
        />
      </div>
    </React.Fragment>
  );
};

export default SelectComponent;
