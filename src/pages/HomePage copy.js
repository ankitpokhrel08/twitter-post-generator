import React, { useState } from "react";
import {
  MessageSquare,
  Repeat2,
  Heart,
  BarChart2,
  Bookmark,
  Upload,
  MoreHorizontal,
} from "lucide-react";

const Preview = () => {
  const [formData, setFormData] = useState({
    name: "Ministry of Education",
    username: "@EduMinOfIndia",
    dateOfPost: "Mar 8",
    profilePicture:
      "https://pbs.twimg.com/profile_images/1725418402729402368/n2K1etZc_400x400.jpg",
    post: `The Department of School Education, Govt of India welcomes the signing of MoU for implementation of PM SHRI in Bihar. It shows the commitment of Bihar to implement NEP 2020 and develop exemplar PM SHRI Schools to showcase all initiatives of NEP 2020. It will ensure transformative educational opportunities for all students, prioritizing their well-being and advancement in Bihar.
    
#PMSHRIScheme #PMSHRISchools #PMSHRIBihar #NEP2020 #BiharEducation

@PMOIndia @narendramodi @dpradhanbjp @PIBHRD @sanjayjavin @PIB_India @DDNewslive @airnewsalerts`,
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="text-white bg-[#1c1f23] rounded-lg w-full max-w-3xl p-4 border border-[#2f3336] shadow-lg">
        <div className="post3 flex p-4 border-b border-[#2f3336]">
          <div className="w-12 cursor-pointer profile-picture md:w-14">
            <img
              className="w-8 h-8 rounded-sm md:w-10 md:h-10"
              src={formData.profilePicture}
              alt="DP"
            />
          </div>
          <div className="w-full profile-content">
            <div className="flex items-center justify-between">
              <h1 className="font-normal md:font-medium">
                <span className="hover:underline hover:cursor-pointer">
                  {formData.name}
                </span>
                <span className="text-[#71767b] font-normal">
                  {formData.username} · {formData.dateOfPost}
                </span>
              </h1>
              <MoreHorizontal className="text-[#71767b] cursor-pointer w-[18px] box-content p-2 h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 rounded-full" />
            </div>
            <div className="flex flex-col justify-center gap-4 items-start tweet">
              <div>
                <h1>{formData.post}</h1>
              </div>
            </div>
            <div className="w-full tweet-reactions">
              <ul className="flex justify-between p-3 pb-0 items-center text-[#71767b]">
                <li className="flex items-center justify-center gap-2 cursor-pointer">
                  <MessageSquare className="w-[18px] h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 p-2 box-content rounded-full" />
                  <span className="text-[#71767b] text-sm hover:text-[#1d9bf0]">
                    3
                  </span>
                </li>
                <li className="flex items-center justify-center gap-2 cursor-pointer">
                  <Repeat2 className="w-[18px] h-[18px] hover:text-[#04b779] hover:bg-slate-900 p-2 box-content rounded-full" />
                  <span className="text-[#71767b] text-sm hover:text-[#04b779]">
                    1.4K
                  </span>
                </li>
                <li className="flex items-center justify-center gap-1 cursor-pointer">
                  <Heart className="w-[18px] h-[18px] hover:text-[#f91880] hover:bg-slate-900 p-2 box-content rounded-full" />
                  <span className="text-[#71767b] text-sm hover:text-[#f91880]">
                    2.6K
                  </span>
                </li>
                <div className="hidden md:block">
                  <li className="flex items-center justify-center gap-2 cursor-pointer">
                    <BarChart2 className="w-[18px] h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 p-2 box-content rounded-full" />
                    <span className="text-[#71767b] text-sm hover:text-[#1d9bf0]">
                      2K
                    </span>
                  </li>
                </div>
                <li className="flex items-center justify-center gap-2 cursor-pointer">
                  <Bookmark className="w-[18px] h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 p-2 box-content rounded-full" />
                </li>
                <li className="flex items-center justify-center gap-2 cursor-pointer">
                  <Upload className="w-[18px] h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 p-2 box-content rounded-full" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
