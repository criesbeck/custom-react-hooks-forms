import React from 'react';
import "rbx/index.css";
import { Button, Checkbox, Column, Container, Control, Field, Input, Label, Section } from 'rbx';
import useForm from "./useForm";

const Form = () => {
  const [ values, handleChange,] = useForm(['email', 'password', 'human']);

  function login(event) {
    event.preventDefault();
    console.log(values);
  }

  return (
    <Section>
      <Container>
        <Column.Group>
          <Column size={4} offset={4}>
            <form onSubmit={login}>
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
                  <Label>
                    <Checkbox name="human" onChange={handleChange} checked={values.human} />
                    I am not a robot.
                  </Label>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Button type="submit" color="primary" disabled={!values.human}>Submit</Button>
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
