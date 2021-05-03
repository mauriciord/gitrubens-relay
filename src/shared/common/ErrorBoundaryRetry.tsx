import React from 'react';
import { Content } from './styles';

/**
 * A reusable component for handling errors in a React (sub)tree.
 */
type Props = {};
type State = {
  error: Error | null;
};

class ErrorBoundaryRetry extends React.Component<Props, State> {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return {
      error,
    };
  }

  render() {
    const { error } = this.state;

    if (error !== null) {
      const { message, source }: any = error;

      return (
        <Content>
          <p>Error: {message}</p>
          <pre>{JSON.stringify(source, null, 2)}</pre>
          <button onClick={() => this.setState({ error: null })}>retry</button>
        </Content>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryRetry;
