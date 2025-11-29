import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.jsx";
import SideNav from "./components/SideNav.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import BackToTop from "./components/BackToTop.jsx";
import LoaderOverlay from "./components/LoaderOverlay.jsx";

const API_KEY = "eba8b9a7199efdcb0ca1f96879b83c44";
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("nowPlaying");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const getCategoryUrl = (type) => {
    switch (type) {
      case "nowPlaying":
        return `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
      case "popular":
        return `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      case "topRated":
        return `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
      case "trending":
        return `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`;
      case "upcoming":
        return `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
      default:
        return `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    }
  };

  const fetchMovies = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch movies");
      const data = await res.json();
      setMovies(data.results || []);
    } catch (err) {
      console.error(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(getCategoryUrl("nowPlaying"));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryChange = (type) => {
    setCategory(type);
    setSearchTerm("");
    fetchMovies(getCategoryUrl(type));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      fetchMovies(getCategoryUrl(category));
      return;
    }

    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
      value.trim()
    )}&page=1&include_adult=false`;

    fetchMovies(url);
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setSideOpen(true);
  };

  return (
    <div className={`app ${sideOpen ? "side-open" : ""}`}>
      <NavBar
        open={sideOpen}
        onToggleSide={() => setSideOpen((prev) => !prev)}
      />

      <SideNav
        open={sideOpen}
        active={category}
        onChangeCategory={handleCategoryChange}
        onContactClick={scrollToContact}
      />

      <main className="main-content">
        <HeroSection
          movies={movies}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearchChange={handleSearchChange} // تعديل هنا لربط الـ input بـ onChange
        />
        <ContactSection />
        <BackToTop visible={showBackToTop} />
      </main>

      <LoaderOverlay visible={loading} />
    </div>
  );
}

export default App;
