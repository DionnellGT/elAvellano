import { AppRouter } from "./app.router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from 'sonner'

const queryClient = new QueryClient() 

export const ElAvellanoApp = () => {  
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster/>
        <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
      
  )
}