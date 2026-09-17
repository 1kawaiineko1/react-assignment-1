import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <NavLink
                to={"/"}
                className={"flex items-center gap-3 mb-6 group"}
              >
                <div
                  className="w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                  style={{ boxShadow: "rgba(249, 115, 22, 0.3) 0px 4px 20px" }}
                >
                  <span className="text-white font-bold text-xl">ع</span>
                </div>
                <span className="text-white font-bold text-xl">عدسة</span>
              </NavLink>
              <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className="flex gap-2">
                <a
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                  href="https://twitter.com/adasah"
                  target="_blank"
                >
                  <i className="fa-brands fa-x-twitter "></i>
                </a>
                <a
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                  href="https://github.com/adasah"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                  href="https://linkedin.com/company/adasah"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                  href="https://youtube.com/@adasah"
                  target="_blank"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>{" "}
                استكشف
              </h3>
              <ul className="space-y-4">
                <li>
                  <NavLink
                    className={
                      "text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    }
                    to={"/"}
                  >
                    <i className="fa-solid fa-angle-left  opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                    الرئيسية
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    }
                    to={"/blog"}
                  >
                    <i className="fa-solid fa-angle-left  opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                    المدونة
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    }
                    to={"/about"}
                  >
                    <i className="fa-solid fa-angle-left  opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                    من نحن
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              {" "}
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                التصنيفات
              </h3>
              <ul className="space-y-4">
                <li>
                  <NavLink
                    className={
                      "text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    }
                    to={"blog?category=إضاءة"}
                  >
                    <i className="fa-solid fa-angle-left  opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                    إضاءة
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    }
                    to={"blog?category=بورتريه"}
                  >
                    <i className="fa-solid fa-angle-left  opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                    بورتريه
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    }
                    to={"blog?category=مناظر طبيعية"}
                  >
                    <i className="fa-solid fa-angle-left  opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                    مناظر طبيعية
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    }
                    to={"/blog?category=تقنيات"}
                  >
                    <i className="fa-solid fa-angle-left  opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                    تقنيات
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              {" "}
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                ابقى على اطلاع
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <button className="w-full btn-primary text-sm" type="submit">
                  اشترك
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-neutral-600">
                © 2026 عدسة. صنع بكل{" "}
                <i className="fa-solid fa-heart text-orange-500"></i> جميع
                الحقوق محفوظة.
              </p>
              <div className="flex gap-6">
                <NavLink
                  className={
                    "text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                  }
                  to={"/privacy"}
                >
                  سياسة الخصوصية
                </NavLink>
                <NavLink
                  className={
                    "text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                  }
                  to={"/terms"}
                >
                  شروط الخدمة
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
