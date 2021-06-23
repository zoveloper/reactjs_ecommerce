import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        render = {({value})=> (
            <TextField
        label={label}
        fullWidth
        required={required}
        error={isError}
        value={undefined}
        
      />
      )}
            />
    </Grid>
  );
}

export default FormInput;