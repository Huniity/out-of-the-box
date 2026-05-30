import { Component, type ReactNode } from 'react'

interface Props { children: ReactNode; resetKey?: string }
interface State { error: Error | null }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  componentDidUpdate(prevProps: Props) {
    if (this.state.error && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ error: null })
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4 p-8">
          <p className="text-white/40 text-sm">Algo correu mal. Tenta recarregar a página.</p>
          {import.meta.env.DEV && (
            <pre className="text-red-400 text-xs max-w-2xl overflow-auto bg-white/5 p-4 rounded whitespace-pre-wrap">
              {this.state.error.message}
              {'\n\n'}
              {this.state.error.stack}
            </pre>
          )}
        </div>
      )
    }
    return this.props.children
  }
}
