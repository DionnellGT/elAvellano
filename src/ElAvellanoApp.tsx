import { AppRouter } from "./app.router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from 'sonner'
import { trackSocialVisit } from "./lib/socialEvents"
import { useEffect } from "react"

const queryClient = new QueryClient() 

export const ElAvellanoApp = () => {  
  useEffect(() => {
    trackSocialVisit();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster/>
        <AppRouter />
    </QueryClientProvider>
      
  )
}