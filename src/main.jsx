import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext.jsx';
import { UserProvider } from './contexts/UserContext.jsx';
import { QuestionProvider } from './contexts/QuestionContext.jsx';
import './index.css';

const client = new ApolloClient({
  uri: 'http://13.201.7.212:8000/graphql',
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <UserProvider>
          <QuestionProvider>
            <NotificationProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </NotificationProvider>
          </QuestionProvider>
        </UserProvider>
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>
);
