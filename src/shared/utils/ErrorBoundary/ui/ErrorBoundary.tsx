import React, { ErrorInfo, ReactNode } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

export interface ErrorBoundaryProps extends WithTranslation {
  children: ReactNode;
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
    const { t } = this.props;

    if (this.state.errorMessage) {
      return (
        <>
          <h1>{t("Unexpected error")}</h1>
          <h2>{`${this.state.errorMessage}`}</h2>
        </>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
