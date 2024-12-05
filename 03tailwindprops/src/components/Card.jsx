import React from "react";

export const Card = ({username,someobj,name,someArray}) => {
    console.log("props are: ",username,someobj,name,someArray);
    
  return (
    <div>
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="https://plus.unsplash.com/premium_photo-1698531630168-217d0294c44b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt="Card Image"
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold text-gray-800 mb-2">{username}</h5>
          <p className="text-gray-600 text-sm mb-4">
            This is a short description about the content of the card. It's
            concise and informative.
          </p>
          <a
            href="#"
            className="block text-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};
