import React, { ComponentType, ErrorInfo, ReactNode } from "react";

export interface ErrorBoundaryProps {
  children: ReactNode;
  Fallback: ComponentType;
}

export interface ErrorBoundaryState {
  errorMessage: string;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error) {
    return { errorMessage: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { Fallback } = this.props;

    if (this.state.errorMessage) {
      return <Fallback>{`${this.state.errorMessage}`}</Fallback>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
