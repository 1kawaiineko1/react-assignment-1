import React, { useState } from "react";
import postsData from "../../data/posts.json";
import CategoryButtons from "../CategoryButtons/CategoryButtons";
import { faL } from "@fortawesome/free-solid-svg-icons";
import BlogCard from "../BlogCard/BlogCard";
import BlogList from "../BlogList/BlogList";
import Pagination from "../Pagination/Pagination";
import { useParams, useSearchParams } from "react-router";

export default function Blog() {
  let { posts, categories } = postsData;
  const [displayedPosts, setDisplayedPosts] = useState(posts);
  const [isGrid, setIsGrid] = useState(true);
  const [gridClass, setgridClass] = useState(
    "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
  );
  const [listClass, setListClass] = useState("flex flex-col gap-6");
  const [displayedClass, setDisplayedClass] = useState(
    " bg-orange-500 text-white",
  );
  const [undisplayedClass, setUndisplayedClass] = useState(
    "text-neutral-400 hover:text-white",
  );
 const [category, setCategory] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(category.get("category") || "all");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  let pages = [];
  for (
    let index = 0;
    index < Math.ceil(displayedPosts.length / postsPerPage);
    index++
  ) {
    pages.push(index + 1);
  }
  const [decrementDisabled, setDecrementDisabled] = useState(true);
  const [incrementDisabled, setIncrementDisabled] = useState(false);
  function decrementPage() {
    let newPage = currentPage - 1;
    setCurrentPage(newPage);
    setIncrementDisabled(false);
    if (newPage == 1) {
      setDecrementDisabled(true);
    } else {
      setDecrementDisabled(false);
    }
  }
  function incrementPage(params) {
    let newPage = currentPage + 1;
    setCurrentPage(newPage);
    setDecrementDisabled(false);
    if (newPage == 5) {
      setIncrementDisabled(true);
    } else {
      setIncrementDisabled(false);
    }
  }
  console.log(category);

  function getPostsByCategory(category) {
    let newPosts = posts.filter((post) => post.category == category);
    setDisplayedPosts(newPosts);
    setActiveCategory(category);
  }
  function getAllPosts() {
    setDisplayedPosts(posts);
    setActiveCategory("all");
  }
  function setDisplayToGrid() {
    setIsGrid(true);
  }
  function setDisplayToList() {
    setIsGrid(false);
  }

  return (
    <>
      <main className="grow pt-20">
        <div className="min-h-screen bg-[#0a0a0a]">
          <div className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="section-label inline-flex items-center gap-2 mb-6">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  ></path>
                </svg>
                مدونتنا
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                استكشف <span className="gradient-text">مقالاتنا</span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
              </p>
            </div>
          </div>
          <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {" "}
                <div className="relative w-full md:w-80">
                  <input
                    type="text"
                    className="input-dark w-full px-5 py-3 pr-12"
                    placeholder="ابحث في المقالات..."
                  />
                  <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"></i>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => getAllPosts()}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === "all" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`}
                  >
                    جميع المقالات
                  </button>
                  {categories.map((category, index) => (
                    <CategoryButtons
                      key={index}
                      category={category}
                      getPostsByCategory={getPostsByCategory}
                      activeCategory={activeCategory}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-neutral-400">
                عرض{" "}
                <span className="font-bold text-white">
                  {displayedPosts.length}
                </span>{" "}
                مقالات
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                  <button
                    onClick={setDisplayToGrid}
                    className={`p-2 rounded-lg transition-all duration-300 ${isGrid ? displayedClass : undisplayedClass} `}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={setDisplayToList}
                    className={`p-2 rounded-lg transition-all duration-300 ${isGrid ? undisplayedClass : displayedClass}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={isGrid ? gridClass : listClass}>
              {displayedPosts
                .map((post) =>
                  isGrid ? (
                    <BlogCard key={post.id} post={post} />
                  ) : (
                    <BlogList key={post.id} post={post} />
                  ),
                )
                .slice(firstPostIndex, lastPostIndex)}
            </div>
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                className={`${decrementDisabled ? "p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed" : "p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"}`}
                disabled={currentPage == 1}
                onClick={decrementPage}
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
              <div className="flex items-center gap-1">
                {pages.map((page, index) => (
                  <Pagination
                    key={index}
                    page={page}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                ))}
              </div>
              <button
                className={`${incrementDisabled ? "p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed" : "p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"}`}
                disabled={currentPage == 5}
                onClick={incrementPage}
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
            </div>
            <p></p>
          </div>
        </div>
      </main>
    </>
  );
}
