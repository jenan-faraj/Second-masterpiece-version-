import React, { useState } from 'react';
import { Calendar, Heart, Star } from 'lucide-react';

const CustomerCommentsSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: 0
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      comment: '',
      rating: 0
    });
    
    setShowForm(false);
    alert('تم إرسال التعليق بنجاح!');
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-gray-800 mb-8 font-serif">
          Customer Comments
        </h2>
        
        {/* Add Comment Button */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-[#B58152] hover:cursor-pointer hover:bg-[#987252] text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            {showForm ? 'إلغاء' : 'أضف تعليقك'}
          </button>
        </div>
        
        {/* Comment Form */}
        {showForm && (
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4 text-right">أضف تعليقك</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-right mb-1">الاسم</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-right"
                  placeholder="أدخل اسمك"
                  required
                  dir="rtl"
                />
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-gray-700 text-right mb-1">التعليق</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-right"
                  placeholder="اكتب تعليقك هنا"
                  required
                  dir="rtl"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-gray-700 text-right mb-1">التقييم</label>
                <div className="flex justify-end space-x-1 space-x-reverse">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <Star
                      key={star}
                      size={24}
                      className={`cursor-pointer ${
                        formData.rating >= star ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                      onClick={() => handleRatingChange(star)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#B58152] hover:cursor-pointer hover:bg-[#987252] text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  إرسال
                </button>
              </div>
            </form>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://i.pinimg.com/474x/c8/99/e6/c899e6283850118f9fcb6b1ed7c49ec4.jpg"
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
                <button className="px-4 py-2 bg-[#B58152] hover:cursor-pointer hover:bg-[#987252] text-white text-sm rounded-lg transition-colors">
                  Read More
                </button>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={`${
                        star <= comment.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <Heart size={20} className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerCommentsSection;