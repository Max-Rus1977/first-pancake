import { useState } from "react";

export function useFatching(collback) {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function featching() {
    try {
      setIsLoading(true);
      await collback();
    }
    catch (e) {
      setError(e.message);
    }
    finally {
      setIsLoading(false);
    }
  }

  return [featching, isLoading, error]

}