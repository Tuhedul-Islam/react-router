# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Learning 
```jsx
    const navigate = useNavigate();

    //Redirect to Blogs: using useNavigate Hook
    <button onClick={() => navigate('/blogs')}>Back to Blogs</button>

    //Not Appropriate Way: Use this only for Link Component like menu or navigation
    <Link to={`/blogs/`} >Back to Blogs</Link>

```

# Used Hook
- useState
- useEffect
- useRef -- initial element state
- useContext -- prop drilling purpose
- useReducer -- when useState logic is complex
- useNavigate -- router dom
- useParam -- url param - router dom
- useSearchParam -- query param - router dom
- useLocation --send state data 


# Learnig Keyword
- routing & dynamic routing (useParam)
- navigate
- useLocation
- useParam
- useSearchParam 
