"use client"; // Required for Next.js app router components

import React, { useState } from "react";
import QuillEditor from "../components/UI/Quill";

const BlogEditorPage = () => {
  const [content, setContent] = useState<string>(""); // State for the editor content

  const handleSubmit = () => {
    console.log("Submitted Content:", content);
    // Replace the following with your Supabase API call to save content
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create a Blog</h1>
      <QuillEditor value={content} onChange={setContent} />
      <button onClick={handleSubmit} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Submit
      </button>
    </div>
  );
};

export default BlogEditorPage;
