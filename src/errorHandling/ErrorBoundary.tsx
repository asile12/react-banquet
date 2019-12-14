import React, { ErrorInfo } from "react"
import { CustomError } from "./CustomError"

interface PropsType {}

interface StateType {
   error: CustomError | null
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

   componentDidCatch(error: CustomError, errorInfo: ErrorInfo): void {
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
               <h3>
                  Error {this.state.error.code}: {this.state.error.message}
               </h3>
               <details style={{ whiteSpace: "pre-wrap" }}>
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
