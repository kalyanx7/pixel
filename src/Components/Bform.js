import { divIcon } from 'leaflet';
import React from 'react';
import { Form, Button } from 'react-bootstrap';

function BootstrapForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
        <Form className="space-y-4">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="border-gray-300" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="border-gray-300" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BootstrapForm;
