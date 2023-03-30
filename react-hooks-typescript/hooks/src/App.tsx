import { useState, useMemo,
  useCallback, // Chamadas de função
  useRef // Refenrecia a um elemento da DOM
} from "react";
import React from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}


const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>();
  const [users, setUser] = useState<[User]>();
  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);
  const greeting = useCallback((user: User) => alert(`Hellow ${user.name}`), []);

  async function loadData(){
    const response = await fetch('https://api.github.com/users/LucasBiason');
    const data = await response.json();
    setUser(data);
  }

  inputRef.current?.focus();

  return (
    <div>
      <h1>Hello Work</h1>
      <form>
        <input type="text" ref="{inputRef}" />
      </form>
    </div>
  );
}

export default App;
