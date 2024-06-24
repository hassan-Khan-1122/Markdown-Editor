import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { FiSun, FiMoon } from "react-icons/fi";

const MarkDownEditor = () => {
  const [markDown, setMarkDown] = useState("# Welcome to markdown");
  const [darkMode, setDarkMode] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const customComponents = {
    h1: ({ node, ...props }) => (
      <h1 className="text-4xl font-bold mt-4" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-3xl font-semibold mt-4" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="text-2xl font-medium mt-4" {...props} />
    ),
    p: ({ node, ...props }) => <p className="mt-2" {...props} />,
    ul: ({ node, ...props }) => (
      <ul className="list-disc list-inside mt-2" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal list-inside mt-2" {...props} />
    ),
    li: ({ node, ...props }) => <li className="ml-4" {...props} />,
    blockquote: ({ node, ...props }) => (
      <blockquote
        className="border-l-4 border-gray-300 pl-4 italic my-4"
        {...props}
      />
    ),
    code: ({ node, ...props }) => (
      <code className="bg-gray-200 rounded px-1 py-0.5" {...props} />
    ),
  };

  const togglechange = () => {
    setDarkMode(!darkMode);
  };

  const handlePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <>
      <h1 className={`text-5xl font-bold mt-5 text-center text-black `}>
        Markdown Editor
      </h1>
      <div className="flex justify-center items-center w-full mt-5 h-[500px] px-[100px]">
        <textarea
          className={`w-full border-[2px] h-[500px] resize-none ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          } text-[17px] p-3 rounded-none`}
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
        />
        <div
          className={`w-full h-[500px] border-[2px] p-3 overflow-auto ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          } `}
        >
          <div className="flex justify-end items-center mb-2">
            {darkMode ? (
              <FiSun
                onClick={togglechange}
                className="cursor-pointer text-yellow-400 text-2xl mr-2"
              />
            ) : (
              <FiMoon
                onClick={togglechange}
                className="cursor-pointer text-gray-800 text-2xl mr-2"
              />
            )}
            <button
              onClick={handlePreview}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {showPreview ? "Hide preview" : "Preview"}
            </button>
          </div>
          {showPreview && (
            <ReactMarkdown
              components={customComponents}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {markDown}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </>
  );
};

export default MarkDownEditor;
