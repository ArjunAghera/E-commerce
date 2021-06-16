import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import { commerce } from "../../lib/commerce";
import { Link } from "react-router-dom";

const AddressForm = ({ test }) => {
  const methods = useForm();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <Typography variant="body2" align="center" gutterBottom color="secondary">
        Ships only in India
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ data }))}>
          <Grid container spacing={3}>
            <FormInput name="firstName" label="First name" />
            <FormInput name="lastName" label="Last name" defaultValue="" />
            <FormInput name="address1" label="Address line 1" defaultValue="" />
            <FormInput name="email" label="Email" defaultValue="" />
            <FormInput name="city" label="City" defaultValue="" />
            <FormInput name="state" label="State" defaultValue="" />
            <FormInput name="zip" label="Zip / Postal code" defaultValue="" />
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} variant="outlined" to="/cart">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
