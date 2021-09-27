import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './login.css';
const Input = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
}) => (
  <Row className="input-row">
    <Col xl={6}>
      <input type="text" />
    </Col>
    <Col xl={6}>
      <input type="text" />
    </Col>
    <Col xl={12}>
      <input type="text" />
    </Col>
  </Row>
);

export default Input;
