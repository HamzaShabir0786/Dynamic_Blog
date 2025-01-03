"use client";
import { useState, useEffect } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]); 
  const [newComment, setNewComment] = useState<string>("");


  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments);

        if (Array.isArray(parsedComments)) {
          setComments(parsedComments);
        }
      } catch (error) {
        console.error("Error parsing comments from localStorage:", error);
      }
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setComments([...comments, newComment.trim()]);
    setNewComment("");
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="flex flex-col items-center">
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment here..."
        name="comment"
        cols={60}
        rows={10}
        className="rounded-lg pl-2"
        style={{ outline: "none" }}
      ></textarea>
      <button
        onClick={handleAddComment}
        className="bg-blue-600 font-bold text-white text-[15px] mt-4 w-[8rem] rounded-md  h-[2.5rem]"
      >
        Add Comment
      </button>
      <div>
        {comments.map((comment, index) => (
          <div
            key={index}
           className="relative w-[400px] mt-6 p-4 bg-gray-200 flex flex-col gap-4 rounded-lg items-center justify-between"
          >
            <p >{comment}</p>
            <button
              onClick={() => handleDeleteComment(index)}
              className="px-4 py-1 font-bold rounded-md text-white bg-blue-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
