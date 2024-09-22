import { Search } from "components/Search";
import "./App.css";
import { Container } from "components/Container";
import { Header } from "components/Header";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock/index";
import { GithubError, GithubUser, LocalGithubUser } from "components/types";
import { isGithubUser } from "components/utils/typeguards";
import { useState } from "react";
import { extractLocalUser } from "components/utils/exract-local-user";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
