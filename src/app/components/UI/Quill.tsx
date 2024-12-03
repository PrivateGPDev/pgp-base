"use client"; // Required for Next.js app router components

import React, { useEffect, useRef } from "react";
import Quill from "quill"; // Import Quill
import "quill/dist/quill.snow.css"; // Include Quill's styles (or another theme)

interface QuillEditorProps {
  value: string; // For controlled component behavior
  onChange: (value: string) => void; // Callback when content changes
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  const quillRef = useRef<HTMLDivElement | null>(null); // Ref for the Quill container
  const quillInstance = useRef<Quill | null>(null); // Ref for the Quill instance

  useEffect(() => {
    if (quillRef.current && !quillInstance.current) {
      // Initialize Quill editor
      quillInstance.current = new Quill(quillRef.current, {
        theme: "snow", // You can change to "bubble" or other themes
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
            ["clean"], // Remove formatting
          ],
        },
      });

      // Listen for changes and call the onChange prop
      quillInstance.current.on("text-change", () => {
        const editorContent = quillInstance.current?.root.innerHTML || "";
        onChange(editorContent);
      });
    }
  }, []);

  // Set the content if the value prop changes
  useEffect(() => {
    if (quillInstance.current && quillInstance.current.root.innerHTML !== value) {
      quillInstance.current.root.innerHTML = value;
    }
  }, [value]);

  return <div className="rounded-xl overflow-hidden mt-8" ref={quillRef} style={{ height: "300px" }} />;
};

export default QuillEditor;
