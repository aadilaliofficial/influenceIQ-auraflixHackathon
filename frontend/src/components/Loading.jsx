import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => (
    <div className="d-flex align-items-center justify-content-center vh-100">
        <Spinner animation="border" variant="light" />
    </div>
);

export default Loading;