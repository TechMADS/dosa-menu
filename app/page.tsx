// app/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuCard() {
  const [page, setPage] = useState(0);

    const pages = [
        { left: "Starters", right: "Main Course" },
            { left: "Desserts", right: "Drinks" },
              ];

                const handleSwipe = () => {
                    setPage((prev) => (prev + 1) % pages.length);
                      };

                        return (
                            <div className="flex items-center justify-center h-screen bg-amber-50">
                                  <div
                                          className="relative w-[300px] h-[300px] cursor-pointer"
                                                  onClick={handleSwipe}
                                                        >
                                                                <AnimatePresence mode="wait">
                                                                          <motion.div
                                                                                      key={page}
                                                                                                  className="absolute inset-0 flex"
                                                                                                              initial={{ rotateY: 180 }}
                                                                                                                          animate={{ rotateY: 0 }}
                                                                                                                                      exit={{ rotateY: -180 }}
                                                                                                                                                  transition={{ duration: 0.8 }}
                                                                                                                                                              style={{ transformStyle: "preserve-3d" }}
                                                                                                                                                                        >
                                                                                                                                                                                    {/* Left Half (Semicircle) */}
                                                                                                                                                                                                <div className="w-1/2 h-full flex items-center justify-center bg-orange-200 rounded-l-full border border-orange-400">
                                                                                                                                                                                                              <p className="text-lg font-bold text-brown-700">{pages[page].left}</p>
                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                      {/* Right Half (Semicircle) */}
                                                                                                                                                                                                                                                  <div className="w-1/2 h-full flex items-center justify-center bg-orange-300 rounded-r-full border border-orange-400">
                                                                                                                                                                                                                                                                <p className="text-lg font-bold text-brown-800">{pages[page].right}</p>
                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                      </motion.div>
                                                                                                                                                                                                                                                                                              </AnimatePresence>
                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                          }