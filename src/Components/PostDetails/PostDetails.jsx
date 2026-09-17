import React from "react";
import { NavLink, useParams } from "react-router";
import postsData from "../../data/posts.json";

export default function PostDetails() {
  let { posts } = postsData;
  let slugid = useParams().slug;
  console.log(slugid);

  let post = posts.filter((post) => post.slug == slugid);

  let {
    id,
    slug,
    title,
    excerpt,
    content,
    category,
    author,
    image,
    date,
    readTime,
    featured,
    tags,
  } = post[0];
  console.log(excerpt);

  let { avatar, name, role } = author;
  let localdate = new Date(date).toLocaleDateString("ar-eg", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <>
      <main className="grow pt-20">
        <article className="bg-[#0a0a0a] min-h-screen">
          <div className="relative h-[60vh] min-h-125 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 to-transparent"></div>
            <div className="absolute top-8 right-8 left-8">
              <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
                <NavLink
                  className={"text-white/70 hover:text-white transition-colors"}
                  to={"/"}
                >
                  <i className="fa-solid fa-home"></i>
                </NavLink>
                <i className="fa-solid fa-chevron-left text-white/30 text-xs"></i>
                <NavLink
                  className={"text-white/70 hover:text-white transition-colors"}
                  to={"/blog"}
                >
                  المدونة
                </NavLink>
                <i className="fa-solid fa-chevron-left text-white/30 text-xs"></i>
                <span className="text-orange-400 font-medium truncate max-w-50">
                  {category}
                </span>
              </nav>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <NavLink
                    className={
                      "px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
                    }
                    to={`/blog?category=${category}`}
                  >
                    {category}
                  </NavLink>
                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <span className="flex items-center gap-2">
                      <i className="fa-regular fa-calendar"></i>
                      {localdate}
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fa-regular fa-clock"></i>
                      {readTime}
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                  {title}
                </h1>
                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                  />
                  <div>
                    <p className="font-bold text-white">{name}</p>
                    <p className="text-sm text-white/60">{role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
              <div className="order-2 lg:order-1">
                <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                  <p className="text-lg text-neutral-200 leading-relaxed italic">
                    {excerpt}
                  </p>
                </div>
              </div>
              <aside className="order-1 lg:order-2"></aside>
            </div>
            <div></div>
          </div>
        </article>
      </main>
    </>
  );
}
