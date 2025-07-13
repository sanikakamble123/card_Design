

import React from 'react';

function Ipl() {
  const IPLshirts = [
    {
      name: 'Mumbai Indians',
      color: '#045093',
      price: '₹799',
      brand: 'Puma',
      image:"https://th.bing.com/th/id/OIP.k-qr8P7WuJckWkbt4ucjxQHaHa?w=190&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      name: 'Chennai Super Kings',
      color: '#f1c40f',
      price: '₹749',
      brand: 'Seven',
      image:"data:image/webp;base64,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"
    },
    {
      name: 'Royal Challengers Bangalore',
      color: '#da1818',
      price: '₹899',
      brand: 'Zeven',
      image: "https://th.bing.com/th/id/OIP.g5-3bWsklkTmOlUGrlgzJwHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
      name: 'Kolkata Knight Riders',
      color: '#3b0064',
      price: '₹850',
      brand: 'Lux Cozi',
      image:"https://th.bing.com/th/id/OIP.2KcvEeYywZdV_WjzcQHI9wAAAA?w=127&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    }
  ];

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {
         IPLshirts.map((shirt) => (
        <div key={shirt.brand}
          style={{
            backgroundColor: shirt.color,
            padding: '20px',
            borderRadius: '10px',
            width: '200px',
            color: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
          
        >
     <img src={shirt.image} 
     style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '10px' }}
     />

          <h3>{shirt.name}</h3>
          <p><strong>Price:</strong> {shirt.price}</p>
          <p><strong>Brand:</strong> {shirt.brand}</p>
        </div>
      ))
      }
    </div>
  );
}

export default Ipl;
