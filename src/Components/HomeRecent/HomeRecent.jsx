import React from "react";
import postsData from "../../data/posts.json";
import { NavLink } from "react-router";
import HomeRecentCard from "../HomeRecentCard/HomeRecentCard";

export default function HomeRecent() {
  let { posts } = postsData;
     console.log(posts);
     

  function getThreeMostRecent(posts) {
    return [...posts]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  }

  return (
    <>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="section-label mb-4">
                <span className="relative flex h-2 w-2 ml-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                الأحدث
              </span>
              <h2 className="section-title text-white">أحدث المقالات</h2>
              <p className="section-subtitle max-w-lg">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <NavLink
              to={"/blog"}
              className={
                "group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
              }
            >
              عرض جميع المقالات
              <i className="fa-solid fa-arrow-left-long group-hover:-translate-x-1 transition-transform "></i>
            </NavLink>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getThreeMostRecent(posts).map((post) => (
              <HomeRecentCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
