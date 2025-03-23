import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1 className="p-5 text-danger">Something went wrong. Check console.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;