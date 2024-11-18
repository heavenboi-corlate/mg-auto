import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback(error);
      }
      return (
        <div className="p-6 mx-auto text-center bg-white/5 backdrop-blur-lg rounded-2xl">
          <h3 className="mb-4 text-xl font-semibold text-red-400">
            Something went wrong
          </h3>
          <p className="text-gray-300">
            We apologize for the inconvenience. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 mt-4 text-white transition-colors duration-300 bg-red-600 rounded-lg hover:bg-red-700"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
