'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { apiCategories, defaultExpandedCategories, type ApiEndpoint, type ApiCategory } from './api-config';

export default function ApiDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint | null>(null);
  const [requestHeaders, setRequestHeaders] = useState<{ key: string; value: string }[]>([]);
  const [requestBody, setRequestBody] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(defaultExpandedCategories);
  const [currentTime, setCurrentTime] = useState('');

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setCurrentTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const auth = sessionStorage.getItem('api_dashboard_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoading(true);
    setLoadingProgress(0);

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);

    try {
      const res = await fetch('/api/dashboard/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      setLoadingProgress(100);
      clearInterval(progressInterval);

      if (data.success) {
        setTimeout(() => {
          sessionStorage.setItem('api_dashboard_auth', 'true');
          setIsAuthenticated(true);
          setIsLoading(false);
        }, 500);
      } else {
        setLoginError(data.error || 'Invalid credentials');
        setIsLoading(false);
      }
    } catch (error) {
      clearInterval(progressInterval);
      setLoginError('Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('api_dashboard_auth');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const selectEndpoint = (endpoint: ApiEndpoint) => {
    setSelectedEndpoint(endpoint);
    setRequestHeaders(endpoint.headers);
    setRequestBody(endpoint.body || '');
    setResponse(null);
  };

  const addHeader = () => {
    setRequestHeaders([...requestHeaders, { key: '', value: '' }]);
  };

  const updateHeader = (index: number, field: 'key' | 'value', value: string) => {
    const updated = [...requestHeaders];
    updated[index][field] = value;
    setRequestHeaders(updated);
  };

  const removeHeader = (index: number) => {
    setRequestHeaders(requestHeaders.filter((_, i) => i !== index));
  };

  const executeRequest = async () => {
    if (!selectedEndpoint) return;

    setLoading(true);
    setResponse(null);

    try {
      const headers: Record<string, string> = {};
      requestHeaders.forEach(h => {
        if (h.key) headers[h.key] = h.value;
      });

      const options: RequestInit = {
        method: selectedEndpoint.method,
        headers
      };

      if (selectedEndpoint.method !== 'GET' && requestBody) {
        options.body = requestBody;
      }

      const startTime = Date.now();
      const res = await fetch(baseUrl + selectedEndpoint.path, options);
      const endTime = Date.now();
      
      const responseData = await res.json();

      setResponse({
        status: res.status,
        statusText: res.statusText,
        time: `${endTime - startTime}ms`,
        headers: Object.fromEntries(res.headers.entries()),
        data: responseData
      });
    } catch (error: any) {
      setResponse({
        status: 'Error',
        statusText: 'Request Failed',
        time: '0ms',
        error: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-gray-700 text-xl mb-4">
            Authenticating...
          </div>
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md border border-gray-200">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">API Dashboard</h1>
            <p className="text-gray-600">Admin Login</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter password"
                required
              />
            </div>

            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Axilobot API Dashboard</h1>
            <p className="text-sm text-gray-600">Test and explore API endpoints</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-gray-600 text-sm px-4 py-2 bg-gray-100 rounded-lg">
              {currentTime}
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
        <div className="w-full max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Endpoints List */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              
              <h2 className="text-lg font-semibold text-gray-900 mb-6">API Endpoints</h2>
              <div className="space-y-3">
                {apiCategories.map((category, catIndex) => (
                  <div key={catIndex} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                    >
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900">{category.name}</h3>
                        <p className="text-xs text-gray-600 mt-1">{category.description}</p>
                      </div>
                      <span className="text-gray-400">
                        {expandedCategories[category.name] ? '▼' : '▶'}
                      </span>
                    </button>
                    
                    {expandedCategories[category.name] && (
                      <div className="p-3 space-y-2 bg-white">
                        {category.endpoints.length === 0 ? (
                          <div className="px-4 py-8 text-center text-gray-500 text-sm">
                            No endpoints yet
                          </div>
                        ) : (
                          category.endpoints.map((endpoint, index) => (
                            <button
                              key={index}
                              onClick={() => selectEndpoint(endpoint)}
                              className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                                selectedEndpoint === endpoint
                                  ? 'bg-blue-50 border-blue-500'
                                  : 'bg-white border-gray-200 hover:bg-gray-50'
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`text-xs font-bold px-2 py-1 rounded ${
                                  endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                                  endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                                  endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-red-100 text-red-700'
                                }`}>
                                  {endpoint.method}
                                </span>
                                {endpoint.requiresAuth && (
                                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                                    AUTH
                                  </span>
                                )}
                              </div>
                              <div className="text-sm font-mono text-gray-700 mb-1">{endpoint.path}</div>
                              <div className="text-xs text-gray-600">{endpoint.description}</div>
                            </button>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Request & Response */}
          <div className="lg:col-span-8 space-y-6">
            {selectedEndpoint ? (
              <>
                {/* Request Configuration */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Request</h2>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      URL
                    </label>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-3 py-2 rounded ${
                        selectedEndpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                        selectedEndpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                        selectedEndpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {selectedEndpoint.method}
                      </span>
                      <input
                        type="text"
                        value={baseUrl + selectedEndpoint.path}
                        readOnly
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Headers
                      </label>
                      <button
                        onClick={addHeader}
                        className="text-sm text-blue-600 hover:text-blue-700"
                      >
                        + Add Header
                      </button>
                    </div>
                    <div className="space-y-2">
                      {requestHeaders.map((header, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Key"
                            value={header.key}
                            onChange={(e) => updateHeader(index, 'key', e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                          <input
                            type="text"
                            placeholder="Value"
                            value={header.value}
                            onChange={(e) => updateHeader(index, 'value', e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                          <button
                            onClick={() => removeHeader(index)}
                            className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedEndpoint.method !== 'GET' && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Body (JSON)
                      </label>
                      <textarea
                        value={requestBody}
                        onChange={(e) => setRequestBody(e.target.value)}
                        rows={10}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                      />
                    </div>
                  )}

                  <button
                    onClick={executeRequest}
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400"
                  >
                    {loading ? 'Sending Request...' : 'Send Request'}
                  </button>
                </div>

                {/* Response */}
                {response && (
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                    
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Response</h2>
                    
                    <div className="mb-4 flex gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Status: </span>
                        <span className={`font-semibold ${
                          response.status >= 200 && response.status < 300 ? 'text-green-600' :
                          response.status >= 400 ? 'text-red-600' :
                          'text-yellow-600'
                        }`}>
                          {response.status} {response.statusText}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Time: </span>
                        <span className="font-semibold text-blue-600">{response.time}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Response Body</h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {JSON.stringify(response.data || response.error, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 text-center border border-gray-200">
                <div className="text-6xl mb-4">🚀</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Select an API Endpoint
                </h2>
                <p className="text-gray-600">
                  Choose an endpoint from the list to start testing
                </p>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
