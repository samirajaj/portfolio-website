"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { PortfolioData } from "@/data/portfolio";
import { useLocale } from "next-intl";

type PortfolioContextType = {
  portfolio: PortfolioData;
  loading: boolean;
};

const PortfolioContext = createContext<PortfolioContextType | null>(null);

export function PortfolioProvider({ children }: PropsWithChildren) {
  const locale = useLocale();

  const [portfolio, setPortfolio] = useState<PortfolioData>({
    education: [],
    personalInfo: {
      email: "",
      fullName: "",
      jobTitle: "",
      links: { other: [] },
      location: "",
      cv: { publicId: "", url: "" },
    },
    projects: [],
    skills: { languages: [], soft: [], technical: [] },
    summary: "",
    workExperiences: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchPortfolio = async () => {
    setLoading(true);

    const res = await fetch(`/api/portfolio?locale=${locale}`, {
      cache: "no-store",
    });

    const data = await res.json();
    setPortfolio(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPortfolio();
  }, [locale]);

  return (
    <PortfolioContext.Provider value={{ portfolio, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export const usePortfolio = () => {
  const ctx = useContext(PortfolioContext);
  if (!ctx)
    throw new Error("usePortfolio must be used inside PortfolioProvider");
  return ctx;
};
