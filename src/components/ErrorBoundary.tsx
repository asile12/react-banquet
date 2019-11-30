import React, { ErrorInfo } from "react"

interface PropsType {}

interface StateType {
   error: Error | null
   errorInfo: ErrorInfo | null
}

class ErrorBoundary extends React.Component<PropsType, StateType> {
   constructor(props: PropsType) {
      super(props)
      this.state = { error: null, errorInfo: null }
   }

   // static getDerivedStateFromError(error) {
   //     // Update state so the next render will show the fallback UI.
   //     return { hasError: true }
   // }

   componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      // Catch errors in any components below and re-render with error message
      this.setState({
         error: error,
         errorInfo: errorInfo,
      })
      // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo)
   }

   render() {
      if (this.state.errorInfo) {
         // You can render any custom fallback UI
         return (
            <div>
               <h2>Something went wrong.</h2>
               <details style={{ whiteSpace: "pre-wrap" }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
               </details>
            </div>
         )
      } else {
         return this.props.children
      }
   }
}

export default ErrorBoundary
