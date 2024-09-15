"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Routes, Settings } from "@/config";
import { Pagination, QuestionList } from "@/features/questions/components";

export default function User({ params: { uuid } }) {
  const params = useSearchParams();
  console.log(params.toString());
  const learningTags = ["Rails", "Ruby", "JavaScript", "HTML"];
  const learnedTags = ["Rails", "Ruby", "JavaScript", "HTML"];

  return (
    <article>
      <div className="relative w-full mx-auto p-4">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 mt-4 w-[112.211px] h-[112.211px] md:left-[30px] md:transform-none z-50">
          <div className="w-full h-full bg-[#FFDFBA] rounded-full"></div>
          <img
            className="absolute left-1/2 transform -translate-x-1/2 md:left-1/2 md:transform-none top-[5px] w-[79px] h-[96px] rounded-[7px]"
            src="<Add image URL here>"
            alt="Profile"
          />
        </div>
        <div className="relative w-full bg-white rounded-lg p-4 mt-[56px] md:mt-[60px] z-10">
          <div className="absolute flex flex-row  left-1/2 transform -translate-x-1/2 top-[60px] md:left-[140px] md:transform-none md:top-[-32px]">
            <div className="text-[#000] text-[14px] mt-3 mr-1">52期</div>
            <div className="text-[#000] text-[24px]">ひさじゅ</div>
          </div>
          <div className="absolute left-1/2 top-[100px] md:top-[2px] md:left-[173px]"
               style={{ transform: 'translateX(calc(-50% + 110px))' }}
          >
            <div className="text-[#676767] text-[13px] right-[90px]">
              id: {uuid}
            </div>
          </div>
          <div className="absolute left-1/2 top-[95px] md:top-[25px] md:left-[214px]"
               style={{ transform: 'translateX(calc(-50% - 50px))' }}
          >
            <div className=" items-center md:flex-row md:items-start mb-4">
              
            </div>
          </div>
          <div className="w-full max-w-[650px] mx-auto mt-28 md:mt-12">
            <div className="text-[#000] text-center md:text-left mb-4">
              ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
            </div>
            <div className="my-1 flex">
              <div className="text-[#000] pr-6">勉強中</div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {learningTags.map(tag => (
                  <span key={tag} className="bg-[#D9D9D9] rounded-[18px] text-[13px] flex items-center justify-center px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full border-t border-[#DEDEDE]"></div>
            <div className="my-1 flex">
              <div className="text-[#000] pr-2">開発経験</div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {learnedTags.map(tag => (
                  <span key={tag} className="bg-[#D9D9D9] rounded-[18px] text-[13px] flex items-center justify-center px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuestionList
        url={`${Settings.API_URL}/questions?uuid=${uuid}`}
      />
    </article>
  );
}
