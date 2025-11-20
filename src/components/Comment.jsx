import { useState } from "react";
import CommentForm from "./CommentForm";

export function Comment({ comment, addComment, editComment, deleteComment, level = 0 }) {
    const [showReplies, setShowReplies] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const hasReplies = comment.replies && comment.replies.length > 0;
    const canEdit = comment.user === "Admin";
    const canDelete = comment.user === "Admin";

    const handleReply = (text) => {
        addComment(text, comment.id);
        setIsReplying(false);
    };

    const handleEdit = (text) => {
        editComment(comment.id, text);
        setIsEditing(false);
    };

    return (
        <div className={`relative border border-gray-700 rounded-sm p-8 mt-4`}>
            <div className="group absolute left-[-12px] top-0 bottom-0 w-[1px] ml-8 mt-2 mb-2 bg-gray-200 cursor-pointer hover:bg-purple-400" onClick={() => setShowReplies(!showReplies)}>
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    {hasReplies && (
                        <div className="w-5 h-5 rounded-full border border-gray-400 text-center text-sm leading-4 font-bold bg-white text-purple-700 group-hover:bg-purple-100 group-hover:border-purple-400 group-hover:text-purple-900 flex items-center justify-center">
                            {showReplies ? '−' : '+'}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-gray-600 flex-shrink-0 overflow-hidden">
                    <img src={comment.image} alt="user_img" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="font-semibold">{comment.user}</span>
                        <span className="text-xs text-gray-400">{comment.timeAgo}</span>
                    </div>
                    {isEditing ? (
                        <CommentForm
                            initialText={comment.text}
                            onSubmit={handleEdit}
                            isEdit={true}
                            onCancel={() => setIsEditing(false)}
                        />
                    ) : (
                        <p className="text-sm text-gray-100 mt-1">{comment.text}</p>
                    )}
                    <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                        <button onClick={() => setIsReplying(!isReplying)} className="hover:underline">Reply</button>
                        {canEdit && <button onClick={() => setIsEditing(!isEditing)} className="hover:underline">Edit</button>}
                        {canDelete && <button onClick={() => deleteComment(comment.id)} className="hover:underline">Delete</button>}
                    </div>
                    {isReplying && (
                        <div className="mt-4">
                            <CommentForm onSubmit={handleReply} />
                        </div>
                    )}
                    {hasReplies && (
                        <div className="mt-4">
                            <button onClick={() => setShowReplies(!showReplies)} className="hover:underline text-xs text-gray-400">
                                {showReplies
                                    ? `Hide replies (${comment.replies.length})`
                                    : `View replies (${comment.replies.length})`}
                            </button>
                        </div>
                    )}
                    {showReplies && comment.replies.map((reply) => (
                        <Comment
                            key={reply.id}
                            comment={reply}
                            addComment={addComment}
                            editComment={editComment}
                            deleteComment={deleteComment}
                            level={level + 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}