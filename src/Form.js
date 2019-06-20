import React from 'react';
import "rbx/index.css";
import { Button, Column, Container, Control, Field, Input, Section } from 'rbx';
import useForm from "./useForm";

const Form = () => {
  const { values, handleChange, handleSubmit } = useForm({email: '', password: ''}, login);

  function login() {
    console.log(values);
  }

  return (
    <Section>
      <Container>
        <Column.Group>
          <Column size={4} offset={4}>
            <form onSubmit={handleSubmit}>
              <Field>
                <Control>
                  <Input type="email" placeholder="Email" name="email" onChange={handleChange} value={values.email} required />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Input type="password" placeholder="Password" name="password" onChange={handleChange} value={values.password} required />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Button type="submit" color="primary">Submit</Button>
                </Control>
              </Field>
            </form>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  );
};

export default Form;
