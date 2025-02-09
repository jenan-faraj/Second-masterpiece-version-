import React from 'react';
import { Calendar, Heart, Star } from 'lucide-react';

const CustomerComments = () => {
  const comments = [
    {
      id: 1,
      name: "Rubina Alfa",
      date: "12 Oct 2021",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      rating: 3,
    },
    {
      id: 2,
      name: "Rubina Alfa",
      date: "12 Oct 2021",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      rating: 3,
    }
  ];

  const RatingStars = ({ rating }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const CommentCard = ({ comment }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="http://127.0.0.1:5500/images/revieu.png"
            alt={comment.name}
            className="w-20 h-20 rounded-full mr-3"
          />
          <span className="font-bold text-gray-800">{comment.name}</span>
        </div>
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
          <Calendar size={14} className="mr-2" />
          <span className="text-sm text-gray-600">{comment.date}</span>
        </div>
      </div>
      
      <p className="mt-4 text-gray-600">
        {comment.text}
      </p>
      
      <div className="flex justify-between items-center mt-4">
        <button className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors">
          Read More
        </button>
        <RatingStars rating={comment.rating} />
        <Heart size={20} className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
      </div>
    </div>
  );

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-gray-800 mb-8 font-serif">
          Customer Comments
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerComments;