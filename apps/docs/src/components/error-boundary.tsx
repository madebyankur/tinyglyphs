"use client";

import React from "react";
import * as TinyGlyphsIcons from "tinyglyphs/react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent
            error={this.state.error}
            resetError={this.resetError}
          />
        );
      }

      return (
        <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
          <div className="bg-destructive/10 flex h-24 w-24 items-center justify-center">
            <TinyGlyphsIcons.ErrorIcon size={40} />
          </div>
          <h3 className="font-departure-mono text-primary-foreground text-lg font-medium">
            Something went wrong
          </h3>
          <p className="text-primary-foreground/50 font-departure-mono text-sm">
            An error occurred while rendering this component.
          </p>
          <button
            onClick={this.resetError}
            className="font-departure-mono border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 border px-4 py-2 text-sm transition-colors"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
