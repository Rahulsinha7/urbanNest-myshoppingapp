import { Outlet,Link,useNavigate } from "react-router";
import React,{ useState } from "react";

export default function Zero() {
    const navigate = useNavigate();
  

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
    const [sortBy, setSortBy] = useState(""); // State for sorting option
    const [sortedImages, setSortedImages] = useState([...images]); // Store sorted images
  
    // Function to sort images based on selection
    const handleSortChange = (e) => {
      const sortValue = e.target.value;
      setSortBy(sortValue);
  
      let sortedList = [...images];
  
      if (sortValue === "price") {
        sortedList.sort((a, b) => a.price - b.price); // Low to high
      } else if (sortValue === "rating") {
        sortedList.sort((a, b) => b.rating - a.rating); // High to low
      }
  
      setSortedImages(sortedList);
    };
  
    return(
        <div className="bg-amber-100">
       
        
        <div>
      <h1 className="text-4xl text-center font-bold">
        Enjoy Our <span className="bg-amber-200">(LIMITED) </span>Range of Luxury Furniture!
      </h1>
      
      <div className="flex justify-center my-4">
        <select
          className="text-yellow-600 bg-transparent border p-2 rounded-md cursor-pointer"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="">Sort By</option>
          <option value="price">Price: Low to High</option>
          <option value="rating">Rating: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-7">
        {sortedImages.map((image, index) => (
          <div
            key={index}
            className="w-[400px] h-[350px] bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
            onClick={() => navigate(`/furniture/${index}`)}
          >
            <img src={image.url} alt="Sofa" className="w-full h-[300px] object-cover" />
            <div className="p-2 flex justify-between">
              <p className="text-lg font-semibold">Rating: {image.rating} ⭐</p>
              <p className="text-md text-gray-700">Price: ₹{image.price}</p>
            </div>
          </div>
        
        ))}
      </div>
    </div>
    <Outlet></Outlet>

        </div>
        
    )
}
