import { useState, useEffect } from "react";
import { Comment } from "./components/Comment";
import CommentForm from "./components/CommentForm";

const initialComments = [
  {
    id:  Date.now() - 86400000 * 2,         // 2 days old
    user: "Admin",
    image: "https://imgs.search.brave.com/UsR7fbbhz4JTyZDiNGgeZtgM-OWH09SmgLMAoONd7O8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc3Vu/c2V0LW92ZXItYS1m/aWVsZC1hZXN0aGV0/aWMtYW5pbWUtc2Nl/bmVyeS1rOGJmM3N6/ejBuNTRtYjdjLmpw/Zw",
    text: "Is my approach correct for Two Sum? I'm using two pointers after sorting but it's failing for some cases.",
    timeAgo: "2 days ago",
    replies: [
      {
        id: Date.now() - 86400000 * 1.5,   // 1.5 days old
        user: "Somya",
        image: "https://imgs.search.brave.com/JpyDiYq2l2SHesDpvKP9o3iDUoLAVNm9aDK7gtHgKRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzA1/MjUzOC5qcGc",
        text: "Sorting breaks original index positions. Use a hashmap instead.",
        timeAgo: "1 day ago",
        replies: [],
      },
    ],
  },

  {
    id: Date.now() - 86400000 * 4,
    user: "Devesh",
    image: "https://imgs.search.brave.com/f2B_EMRCmffCu8lTEXqsA7nhkTMR2ga7Ps5bVizY2r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzA1/MjU0NS5qcGc",
    text: "For Valid Palindrome, do we really need two pointers or is regex enough?",
    timeAgo: "4 days ago",
    replies: [
      {
        id: Date.now() - 86400000 * 3,
        user: "Akshdeep",
        image: "https://imgs.search.brave.com/bpEs7QhsrJ_3Ewe_e-6f57lRej1SzI6ufFTYDHsXR-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5NTE1/ODQuanBn",
        text: "Regex works but two pointers is faster and interview-friendly.",
        timeAgo: "3 days ago",
        replies: [],
      },
    ],
  },

  {
    id: Date.now() - 86400000 * 7,
    user: "Akshdeep",
    image: "https://imgs.search.brave.com/bpEs7QhsrJ_3Ewe_e-6f57lRej1SzI6ufFTYDHsXR-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5NTE1/ODQuanBn",
    text: "My Contains Duplicate solution is O(n log n). Is it fine or should I optimize?",
    timeAgo: "7 days ago",
    replies: [
      {
        id: Date.now() - 86400000 * 6.5,
        user: "Devesh",
        image: "https://imgs.search.brave.com/f2B_EMRCmffCu8lTEXqsA7nhkTMR2ga7Ps5bVizY2r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzA1/MjU0NS5qcGc",
        text: "Use a hashset for O(n). Most optimal and clean.",
        timeAgo: "6 days ago",
        replies: [],
      },
      {
        id: Date.now() - 86400000 * 6,
        user: "Admin",
        image: "https://imgs.search.brave.com/UsR7fbbhz4JTyZDiNGgeZtgM-OWH09SmgLMAoONd7O8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc3Vu/c2V0LW92ZXItYS1m/aWVsZC1hZXN0aGV0/aWMtYW5pbWUtc2Nl/bmVyeS1rOGJmM3N6/ejBuNTRtYjdjLmpw/Zw",
        text: "Accepted in interviews as well. Prefer hash-based approach.",
        timeAgo: "6 days ago",
        replies: [],
      },
    ],
  },

  {
    id: Date.now() - 86400000 * 3,
    user: "Armaan",
    image: "https://imgs.search.brave.com/gqFzT8cj61NbKtg-wtyHfQofo73ExCMUNy0-7T1geig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzYWZhcmku/Y29tL2ltYWdlL2Fu/aW1lLWxhbmRzY2Fw/ZS13YWxscGFwZXJz/LmpwZw",
    text: "Reverse String is easy but what’s the trick to do it in-place without extra space?",
    timeAgo: "3 days ago",
    replies: [
      {
        id: Date.now() - 86400000 * 2.8,
        user: "Devesh",
        image: "https://imgs.search.brave.com/f2B_EMRCmffCu8lTEXqsA7nhkTMR2ga7Ps5bVizY2r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzA1/MjU0NS5qcGc",
        text: "Swap left and right pointers until they meet. No extra memory needed.",
        timeAgo: "2 days ago",
        replies: [],
      },
    ],
  },

  {
    id: Date.now() - 86400000 * 10,
    user: "Admin",
    image: "https://imgs.search.brave.com/UsR7fbbhz4JTyZDiNGgeZtgM-OWH09SmgLMAoONd7O8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc3Vu/c2V0LW92ZXItYS1m/aWVsZC1hZXN0aGV0/aWMtYW5pbWUtc2Nl/bmVyeS1rOGJmM3N6/ejBuNTRtYjdjLmpw/Zw",
    text: "Reminder: Always check edge cases like empty strings, single elements, and large inputs when solving DSA problems.",
    timeAgo: "10 days ago",
    replies: [
      {
        id: Date.now() - 86400000 * 9,
        user: "Akshdeep",
        image: "https://imgs.search.brave.com/bpEs7QhsrJ_3Ewe_e-6f57lRej1SzI6ufFTYDHsXR-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5NTE1/ODQuanBn",
        text: "True, valid palindrome fails for empty string if not handled.",
        timeAgo: "9 days ago",
        replies: [],
      },
    ],
  },
];

export default function App() {
  const [comments, setComments] = useState(() => {
    const localData = localStorage.getItem('comments');
    const localComments = localData ? JSON.parse(localData) : [];
    const allComments = [...initialComments, ...localComments];
    const commentMap = new Map();
    allComments.forEach(comment => commentMap.set(comment.id, comment));
    return Array.from(commentMap.values());
  });

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const addComment = (text, parentId = null) => {
    const newComment = {
      id: Date.now(),
      user: "Armaan",
      image: "https://imgs.search.brave.com/gqFzT8cj61NbKtg-wtyHfQofo73ExCMUNy0-7T1geig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzYWZhcmku/Y29tL2ltYWdlL2Fu/aW1lLWxhbmRzY2Fw/ZS13YWxscGFwZXJz/LmpwZw",
      text,
      timeAgo: "just now",
      replies: [],
    };

    if (parentId === null) {
      setComments([...comments, newComment]);
    } else {
      const addReply = (comments, parentId, newComment) => {
        return comments.map(comment => {
          if (comment.id === parentId) {
            return { ...comment, replies: [...comment.replies, newComment] };
          }
          if (comment.replies.length > 0) {
            return { ...comment, replies: addReply(comment.replies, parentId, newComment) };
          }
          return comment;
        });
      };
      setComments(addReply(comments, parentId, newComment));
    }
  };

  const editComment = (commentId, newText) => {
    const update = (comments) => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, text: newText };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: update(comment.replies) };
        }
        return comment;
      });
    };
    setComments(update(comments));
  };

  const deleteComment = (commentId) => {
    const remove = (comments) => {
      return comments.filter(comment => comment.id !== commentId).map(comment => {
        if (comment.replies.length > 0) {
          return { ...comment, replies: remove(comment.replies) };
        }
        return comment;
      });
    };
    setComments(remove(comments));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="flex items-center justify-center bg-gray-900 text-white p-1">
        <h1 className="text-4xl font-bold mb-6">Discussion Forum:</h1>
      </div>
      <div className="flex items-center justify-center bg-gray-900 text-white p-1">
        <p className=" text-xl text-purple-400 mb-6">Where People Connect and Coders Conquest</p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add a comment</h2>
        <CommentForm onSubmit={addComment} />
      </div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          addComment={addComment}
          editComment={editComment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
}
