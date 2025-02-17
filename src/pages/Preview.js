import html2canvas from "html2canvas";

import {
  MessageSquare,
  Repeat2,
  Heart,
  BarChart2,
  Bookmark,
  Upload,
  MoreHorizontal,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router";

const Preview = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  const navigate = useNavigate();

  const imageUrl = formData?.profilePicture
    ? URL.createObjectURL(formData.profilePicture)
    : null;

  const formatDate = (date) => {
    const options = { month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options); // Formats to 'Aug 7'
  };
  // Reset the form data
  const handleReset = () => {
    // Navigate back to the Home page with no data
    navigate("/home");
  };

  // const handleDownload = () => {
  //   const tweetCard = document.querySelector(".post3");

  //   html2canvas(tweetCard, {
  //     useCORS: true,
  //     logging: true,
  //     backgroundColor: null, // Transparent background
  //     scale: 10, // High quality
  //     allowTaint: true,
  //     width: tweetCard.offsetWidth,
  //     height: tweetCard.offsetHeight,
  //     x: 0, // Adjust positioning
  //     y: 0,
  //   }).then((canvas) => {
  //     const imageUrl = canvas.toDataURL("image/png");

  //     const link = document.createElement("a");
  //     link.href = imageUrl;
  //     link.download = "tweet-card.png"; // Download the file as PNG
  //     link.click(); // Trigger the download
  //   });
  // };

  const handleDownload = () => {
    const tweetCard = document.querySelector(".post3");

    // Temporarily remove 'hidden' or change display property
    tweetCard.classList.remove("hidden"); // If you are using Tailwind's 'hidden' class

    setTimeout(() => {
      html2canvas(tweetCard, {
        useCORS: true,
        logging: true,
        backgroundColor: null, // Transparent background
        scale: 10, // High quality
        allowTaint: true,
        width: tweetCard.offsetWidth,
        height: tweetCard.offsetHeight,
        x: 0, // Adjust positioning
        y: 0,
      }).then((canvas) => {
        const imageUrl = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "tweet-card.png"; // Download the file as PNG
        link.click(); // Trigger the download

        // Re-hide the element after capturing the image
        tweetCard.classList.add("hidden"); // If you are using Tailwind's 'hidden' class
      });
    }, 1); // Small delay to ensure rendering is complete
  };

  const formattedDate = formatDate(formData.dateOfPost);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      {/* Tweet Card */}
      <div className="text-white bg-[#1c1f23] rounded-lg w-full max-w-3xl p-4 border border-[#2f3336] shadow-lg">
        <div className="flex p-4 border-b border-[#2f3336]">
          <div className="w-12 cursor-pointer profile-picture md:w-14">
            <img
              className="w-8 h-8 rounded-full md:w-10 md:h-10"
              src={imageUrl}
              alt="DP"
              crossOrigin="anonymous"
            />
          </div>
          <div className="w-full profile-content">
            <div className="flex items-center justify-between">
              <h1 className="font-normal md:font-medium">
                <span className="hover:underline hover:cursor-pointer">
                  {formData.name}
                </span>
                <span className="text-[#71767b] font-normal">
                  {} {formData.username} · {formattedDate}
                </span>
              </h1>
              <MoreHorizontal className="text-[#71767b] cursor-pointer w-[18px] box-content p-2 h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 rounded-full" />
            </div>
            <div className="flex flex-col justify-center gap-4 items-start tweet">
              <div className="max-w-[calc(100%-50px)]">
                <h1 className="break-words">{formData.post}</h1>
              </div>
            </div>

            <div className="w-full tweet-reactions">
              <ul className="flex justify-between p-3 pb-0 items-center text-[#71767b]">
                <li className="flex items-center justify-center gap-2 cursor-pointer">
                  <MessageSquare className="w-[18px] h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 p-2 box-content rounded-full" />
                  <span className="text-[#71767b] text-sm hover:text-[#1d9bf0]">
                    {formData.comments}
                  </span>
                </li>
                <li className="flex items-center justify-center gap-2 cursor-pointer">
                  <Repeat2 className="w-[18px] h-[18px] hover:text-[#04b779] hover:bg-slate-900 p-2 box-content rounded-full" />
                  <span className="text-[#71767b] text-sm hover:text-[#04b779]">
                    {formData.retweets}
                  </span>
                </li>
                <li className="flex items-center justify-center gap-1 cursor-pointer">
                  <Heart className="w-[18px] h-[18px] hover:text-[#f91880] hover:bg-slate-900 p-2 box-content rounded-full" />
                  <span className="text-[#71767b] text-sm hover:text-[#f91880]">
                    {formData.likes}
                  </span>
                </li>
                <div className="hidden md:block">
                  <li className="flex items-center justify-center gap-2 cursor-pointer">
                    <BarChart2 className="w-[18px] h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 p-2 box-content rounded-full" />
                    <span className="text-[#71767b] text-sm hover:text-[#1d9bf0]">
                      80
                    </span>
                  </li>
                </div>
                <div className="flex items-center space-x-2">
                  <li className="flex items-center justify-center gap-2 cursor-pointer">
                    <Bookmark className="w-[18px] h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 p-2 box-content rounded-full" />
                  </li>
                  <li className="flex items-center justify-center gap-2 cursor-pointer">
                    <Upload className="w-[18px] h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 p-2 box-content rounded-full" />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Downloadable Tweet Card */}
      <div className="absolute bottom-[-10000px] hidden post3 text-white bg-[#1c1f23] rounded-lg w-full max-w-3xl border border-[#2f3336] shadow-lg">
        <div className="flex border-b border-[#2f3336] mt-5 mx-3">
          <div className="w-12 cursor-pointer profile-picture md:w-14">
            <img
              className="w-8 h-8 rounded-full md:w-10 md:h-10"
              src={imageUrl}
              alt="DP"
              crossOrigin="anonymous"
            />
          </div>
          <div className="w-full profile-content mt-[-20px]">
            <div className="flex items-center justify-between">
              <h1 className="font-normal md:font-medium">
                <span className="hover:underline hover:cursor-pointer">
                  {formData.name}
                </span>
                <span className="text-[#71767b] font-normal">
                  {} {formData.username} · {formattedDate}
                </span>
              </h1>
              <MoreHorizontal className="text-[#71767b] cursor-pointer w-[18px] box-content h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 rounded-full" />
            </div>
            <div className="flex flex-col justify-center gap-4 items-start tweet">
              <div className="max-w-[calc(100%-50px)]">
                <h1 className="break-words">{formData.post}</h1>
              </div>
            </div>

            <div className="w-full tweet-reactions mt-7">
              <ul className="flex justify-between pb-0 items-center text-[#71767b] mb-10">
                <li className="flex items-center justify-center gap-2 cursor-pointer">
                  <MessageSquare className="w-[18px] h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 box-content rounded-full" />
                  <span className="text-[#71767b] text-sm hover:text-[#1d9bf0] -mt-5">
                    {formData.comments}
                  </span>
                </li>
                <li className="flex items-center justify-center gap-2 cursor-pointer">
                  <Repeat2 className="w-[18px] h-[18px] hover:text-[#04b779] hover:bg-slate-900 box-content rounded-full" />
                  <span className="text-[#71767b] text-sm hover:text-[#04b779] -mt-5">
                    {formData.retweets}
                  </span>
                </li>
                <li className="flex items-center justify-center gap-1 cursor-pointer">
                  <Heart className="w-[18px] h-[18px] hover:text-[#f91880] hover:bg-slate-900 box-content rounded-full" />
                  <span className="text-[#71767b] text-sm hover:text-[#f91880] -mt-5">
                    {formData.likes}
                  </span>
                </li>
                <div className="hidden md:block">
                  <li className="flex items-center justify-center gap-2 cursor-pointer">
                    <BarChart2 className="w-[18px] h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 box-content rounded-full" />
                    <span className="text-[#71767b] text-sm hover:text-[#1d9bf0] -mt-5">
                      80
                    </span>
                  </li>
                </div>
                <div className="flex items-center space-x-2">
                  <li className="flex items-center justify-center gap-2 cursor-pointer">
                    <Bookmark className="w-[18px] h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 box-content rounded-full" />
                  </li>
                  <li className="flex items-center justify-center gap-2 cursor-pointer">
                    <Upload className="w-[18px] h-[18px] hover:text-[#1d9bf0] hover:bg-slate-900 box-content rounded-full" />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons for Reset, Edit, and Download */}
      <div className="mt-[15rem] fixed flex justify-center gap-4">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
          onClick={handleReset}
        >
          Reset
        </button>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Preview;
