import { useState, useEffect } from "react";
import { Comment } from "./components/Comment";
import CommentForm from "./components/CommentForm";

const initialComments = [
    {
    id: 1,
    user: "Armaan",
    image: "https://imgs.search.brave.com/gqFzT8cj61NbKtg-wtyHfQofo73ExCMUNy0-7T1geig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzYWZhcmku/Y29tL2ltYWdlL2Fu/aW1lLWxhbmRzY2Fw/ZS13YWxscGFwZXJz/LmpwZw",
    text: "Did anyone apply for AKTU re-evaluation? My marks feel totally off in COA.",
    timeAgo: "2d ago",
    replies: [
      {
        id: 2,
        user: "Harshit",
        image: "https://imgs.search.brave.com/UsR7fbbhz4JTyZDiNGgeZtgM-OWH09SmgLMAoONd7O8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc3Vu/c2V0LW92ZXItYS1m/aWVsZC1hZXN0aGV0/aWMtYW5pbWUtc2Nl/bmVyeS1rOGJmM3N6/ejBuNTRtYjdjLmpw/Zw",
        text: "Same here, applied for DE and OS. Hope they check it properly this time.",
        timeAgo: "1d ago",
        replies: [
          {
            id: 3,
            user: "Anmol",
            image: "https://imgs.search.brave.com/bUbVgCzatxoRoLUtJ8wjMYiozfLfJLCLnoQ4QEblAaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDU2ODM0/MjAuanBn",
            text: "They changed my result last semester after re-eval. It’s rare, but it happens!",
            timeAgo: "12h ago",
            replies: [],
          },
        ],
      },
      {
        id: 4,
        user: "Kamran",
        image: "https://imgs.search.brave.com/f2B_EMRCmffCu8lTEXqsA7nhkTMR2ga7Ps5bVizY2r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzA1/MjU0NS5qcGc",
        text: "Bro I applied last year and nothing changed. Waste of 2800 per subject. 😤",
        timeAgo: "3d ago",
        replies: [],
      },
    ],
  },
  {
    id: 5,
    user: "Harsh",
    image: "https://imgs.search.brave.com/5tOrnoRWjobWeygx2zGO-yezR0_v-U340_Drj5QPB1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2af/YXJpLmNvbS84NS85/NC9JdGJXVG0uanBn",
    text: "Why does AKTU always delay results? This is mentally exhausting.",
    timeAgo: "4d ago",
    replies: [
      {
        id: 6,
        user: "Akshdeep",
        image: "https://imgs.search.brave.com/JpyDiYq2l2SHesDpvKP9o3iDUoLAVNm9aDK7gtHgKRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzA1/MjUzOC5qcGc",
        text: "Fr! Every semester we keep checking ERP like fools. 😞",
        timeAgo: "3d ago",
        replies: [
          {
            id: 7,
            user: "Dhairya",
            image: "https://imgs.search.brave.com/bpEs7QhsrJ_3Ewe_e-6f57lRej1SzI6ufFTYDHsXR-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5NTE1/ODQuanBn",
            text: "Even ERP crashes when results are out lol. Can't even handle traffic.",
            timeAgo: "1d ago",
            replies: [],
          },
        ],
      },
    ],
  },
];

export default function App() {
  const [comments, setComments] = useState(initialComments);

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
      <h1 className="text-2xl font-bold mb-6">Discussion Forum:</h1>
      <p className="text-l font-bold mb-6">Where People Connect and coders conquest</p>
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
