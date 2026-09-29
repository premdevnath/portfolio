import { lazy, Suspense, useState } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import Resume from "./components/Resume";

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer onResumeOpen={() => setIsResumeOpen(true)}>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
      <Resume
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};

export default App;
