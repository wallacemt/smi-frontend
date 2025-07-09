import React from "react";
import { FaThumbsUp, FaComment, FaShare, FaFacebook } from "react-icons/fa";

type PostCardProps = {
  text: string;
  likes: string;
  comments: number;
  shares: number;
};

const PostCard: React.FC<PostCardProps> = ({ text, likes, comments, shares }) => (
  <div className="bg-gray-700 rounded-lg p-4">
    <div className="flex items-start space-x-3">
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
        <FaFacebook className="fab fa-facebook text-white" />
      </div>
      <div className="flex-1">
        <p className="text-white text-sm mb-2">{text}</p>
        <div className="flex space-x-4 text-xs text-gray-400">
          <span>
            <FaThumbsUp className="inline mr-1" />
            {likes}
          </span>
          <span>
            <FaComment className="inline mr-1" />
            {comments}
          </span>
          <span>
            <FaShare className="inline mr-1" />
            {shares}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default PostCard;
