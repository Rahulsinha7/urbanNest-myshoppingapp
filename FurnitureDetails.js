import React from "react";
import { useParams } from "react-router";

export default function FurnitureDetails() {
  const { furnitureId } = useParams(); // Corrected the key name

  const images = [
    { url: "https://thumbs.dreamstime.com/b/top-view-living-room-sofa-poster-frame-floor-mockup-view-above-top-view-living-room-sofa-poster-335890696.jpg", rating: 4.2, price: 30000 },
    { url: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", rating: 3.9, price: 21000 },
    { url: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvZmF8ZW58MHx8MHx8fDA%3D", rating: 4.1, price: 28000 },
    { url: "https://thumbs.dreamstime.com/b/overhead-view-modern-living-room-large-u-shaped-sectional-sofa-wooden-floors-large-windows-indoor-plants-overhead-351513275.jpg", rating: 4.5, price: 69999 },
    { url: "https://ak1.ostkcdn.com/images/products/is/images/direct/97e229703d56067b1bcc4e15f60c814262ac7296/Blue-Linen-U-shape-Sectional-Sofa-Set-with-Ottoman-Chaise-and-Pillows.jpg?impolicy=medium", rating: 4.0, price: 79000 },
    { url: "https://media-uk.landmarkshops.in/cdn-cgi/image/h=550,w=550,q=85,fit=cover/homecentre/1000007435526-1000007435525_01-2100.jpg", rating: 4.9, price: 25000 },
    { url: "https://theinvisiblecollection.com/wp-content/uploads/2024/07/InvisibleCollection_JeromeBugara_ButterflyCurve3SeaterSofa_Main.jpg", rating: 3.9, price: 38000 },
    { url: "https://ii1.pepperfry.com/media/catalog/product/o/s/494x544/oslo-curve-fabric-3-seater-sofa-in-navy-blue-colour-oslo-curve-fabric-3-seater-sofa-in-navy-blue-col-djnfjs.jpg", rating: 3.5, price: 21000 },
    { url: "https://ii1.pepperfry.com/media/catalog/product/b/i/494x544/bingo-fabric-3-seater-sofa-in-grey-colour-bingo-fabric-3-seater-sofa-in-grey-colour-qvofnh.jpg", rating: 4.1, price: 44000 },
    { url: "https://www.godrejinterio.com/imagestore/B2C/56101515SD00665/56101515SD00665_A2_1440x810.jpg", rating: 3.9, price: 38000 },
    { url: "https://woodentwist.com/cdn/shop/products/untitled.1274.jpg?v=1689871537", rating: 3.9, price: 58000 },
    { url: "https://woodentwist.com/cdn/shop/products/WhatsAppImage2022-07-25at11.05.05PM.1290.jpg?v=1689871645", rating: 3.9, price: 48000 },
  ];

  // Convert `furnitureId` to a number
  const index = parseInt(furnitureId, 10);

  // Check if index is valid
  if (isNaN(index) || index < 0 || index >= images.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-4xl text-red-500 font-extrabold">Furniture not found! <span className="gap-2 bg-red-400 text-white">Sorry!</span></p>
        <p className="text-2xl text-black font-bold">/ NOT AVAILABLE IN OUR STOCKS</p>
      </div>
    );
    
  }

  const furniture = images[index];

  return (
    <div className="p-4 bg-yellow-600 ">
      <img src={furniture.url} alt="Sofa" className="w-full max-w-xl mx-auto rounded-xl shadow-lg" />
      <div className="p-2 flex justify-between mt-4">
        <p className="text-lg font-semibold">Rating: {furniture.rating} ⭐</p>
        <p className="text-xl text-gray-700">Price: ₹{furniture.price}</p>
      </div>
      <div className="text-center bg-gray-900 p-4">
        <button className="bg-yellow-600 p-2 rounded-2xl cursor-pointer hover:bg-yellow-700 onclick()=>{}">Add to Cart</button>
      </div>
    </div>
  );
}