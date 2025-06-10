import { useState } from "react";
export function Comment({ comment, level = 0 }) {
    const [showReplies, setShowReplies] = useState(false);
    const hasReplies = comment.replies && comment.replies.length > 0;
    return (
        <div className={`relative border border-gray-700 rounded-sm p-8 mt-4 ml-[${level * 4}]`}>
            {level >= 0 && (
                <div className="absolute left-[-12px] top-0 bottom-0 w-1 ml-8 mt-2 mb-2 bg-gray-200 hover:bg-blue-400 cursor-pointer" 
                onClick={() => setShowReplies(!showReplies)}/>
            )}
            <div className="flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-gray-600 flex-shrink-0 overflow-hidden">
                    <img src={comment.image} alt="user_img" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="font-semibold">{comment.user}</span>
                        <span className="text-xs text-gray-400">{comment.timeAgo}</span>
                    </div>
                    <p className="text-sm text-gray-100 mt-1">{comment.text}</p>
                    {hasReplies && (
                        <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                            <button onClick={() => setShowReplies(!showReplies)} className="w-5 h-5 rounded-full border border-gray-400 text-center text-sm leading-4 text-white font-bold">
                                {showReplies ? '−' : '+'}
                            </button>
                            <button onClick={() => setShowReplies(!showReplies)} className="hover:underline">
                                {showReplies
                                    ? `Hide replies (${comment.replies.length})`
                                    : `View replies (${comment.replies.length})`}
                            </button>
                        </div>
                    )}
                    {showReplies && comment.replies.map((reply, index) => (
                            <Comment key={index} comment={reply} level={level + 1} />
                        ))}
                </div>
            </div>
        </div>
    );
}
