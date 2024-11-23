import React, { useState } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    dateOfPost: "",
    profilePicture: null,
    post: "",
    likes: "",
    retweets: "",
    comments: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);
    // Navigate to /preview after submitting
    navigate("/preview", { state: { formData } });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Create a Post
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="dateOfPost"
            >
              Date of Post
            </label>
            <input
              type="date"
              id="dateOfPost"
              name="dateOfPost"
              value={formData.dateOfPost}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="profilePicture"
            >
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="post"
            >
              Post
            </label>
            <textarea
              id="post"
              name="post"
              placeholder="Write your post"
              value={formData.post}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            ></textarea>
          </div>
          {/* Likes Input */}
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="likes"
            >
              Likes
            </label>
            <input
              type="number"
              id="likes"
              name="likes"
              placeholder="Enter the number of likes"
              value={formData.likes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          {/* Retweets Input */}
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="retweets"
            >
              Retweets
            </label>
            <input
              type="number"
              id="retweets"
              name="retweets"
              placeholder="Enter the number of retweets"
              value={formData.retweets}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          {/* Comments Input */}
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="comments"
            >
              Comments
            </label>
            <input
              type="number"
              id="comments"
              name="comments"
              placeholder="Enter the number of comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
