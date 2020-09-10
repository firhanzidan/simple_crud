import React, { useState } from "react";
import { Collapse, Button, CardBody, Card, Container,Form, FormGroup, Label, Input, FormText } from "reactstrap";

const ToastComponent = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState("Create New Contact");

  const onEntering = () => setStatus("Please Wait");

  const onEntered = () => setStatus("Fill The Form");

  const onExiting = () => setStatus("Closing...");

  const onExited = () => setStatus("Create New Contact");

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Container>
          <Button
            color="primary"
            onClick={toggle}
            style={{ marginBottom: "1rem" }}
          >
            {status}
          </Button>
        <Collapse
          isOpen={collapse}
          onEntering={onEntering}
          onEntered={onEntered}
          onExiting={onExiting}
          onExited={onExited}
        >
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Input
                    type="firstname"
                    name="firstname"
                    id="exampleFirstname"
                    placeholder="First Name"
                  />
                </FormGroup>     
                <FormGroup>
                  <Input
                    type="lastname"
                    name="lastname"
                    id="exampleLastname"
                    placeholder="Last Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="phonenumber"
                    name="phonenumber"
                    id="examplePhonenumber"
                    placeholder="Phone Number"
                  />
                </FormGroup>  
                <FormGroup>
                  <Label for="exampleFile">File</Label>
                  <Input type="file" name="file" id="exampleFile" />
                  <FormText color="muted">
                    choose any file to set the contact picture
                  </FormText>
                </FormGroup>
                <Button color='success'>SAVE</Button>
              </Form>
            </CardBody>
          </Card>
        </Collapse>
      </Container>
    </div>
  );
};

export default ToastComponent;
