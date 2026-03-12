import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);

  // Auto-increment loading to 100%
  useEffect(() => {
    console.log("Loading started");
    
    const interval = setInterval(() => {
      setLoading(prev => {
        const newValue = prev >= 100 ? 100 : prev + 10;
        console.log("Loading percent:", newValue);
        
        if (prev >= 100) {
          clearInterval(interval);
          console.log("Loading complete, hiding in 500ms");
          setTimeout(() => {
            console.log("Hiding loading screen now");
            setIsLoading(false);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Emergency timeout - force hide after 5 seconds no matter what
    const emergencyTimer = setTimeout(() => {
      console.log("Emergency timeout - forcing loading to hide");
      setIsLoading(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(emergencyTimer);
    };
  }, []);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};