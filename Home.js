import AnimatedText from "./AnimatedText";

export default function Home(){
    return(
        <div>
          <h1 className="fixed top-0 right-0 text-3xl"><span className="text-amber-50">Urban</span> Nest<span className="bg-yellow-600 text-black font-bold">(uN)</span></h1>
        <header className="bg-gray-600 font-serif">
       
        <AnimatedText></AnimatedText>

        <div className="text-center py-10 bg-gray-700 text-white">
  <h1 className="text-3xl md:text-4xl font-bold mb-8">Explore Our Furniture Range</h1>

  <div className="max-w-[90%] mx-auto overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide ">

    <div className="flex gap-6">
      {[
        { href: "https://www.urbanladder.com/sofa-set?src=explore_categories", imgSrc: "https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2ndhalf5934_green.jpg" },
        { href: "https://www.urbanladder.com/bed?src=explore_categories", imgSrc: "https://woodentwist.com/cdn/shop/products/untitled.1274.jpg?v=1689871537" },
        { href: "https://www.urbanladder.com/dining-table-set?src=explore_categories", imgSrc: "https://www.hokybo.com/CompanyData/Product/13MD172(HGTG)/1.jpg" },
        { href: "https://www.urbanladder.com/wardrobes?src=explore_categories", imgSrc: "https://m.media-amazon.com/images/I/61YE2yajtRL._AC_UF894,1000_QL80_.jpg" },
        { href: "https://www.urbanladder.com/shoe-rack?src=explore_categories", imgSrc: "https://images.woodenstreet.de/image/data/shoe-rack/amantra-sheesham-wood-cane-shoe-rack/walnut-finish/new-logo/2.jpg" },
        { href: "https://www.urbanladder.com/bookshelf?src=explore_categories", imgSrc: "https://mywakeup.in/cdn/shop/files/Thistle_Solid_Wood_Open_Bookshelf.webp?v=1725974383&width=1214" },
        { href: "https://www.urbanladder.com/tv-units?src=explore_categories", imgSrc: "https://zenlayercdn.centuryply.com/blogimage/3-01-24/blog2-9.jpeg" },
        { href: "https://www.urbanladder.com/home-decor?src=explore_categories", imgSrc: "https://www.ulcdn.net/media/web-home-popular-categories/Lighting.png?1727341057" },
        { href: "https://www.urbanladder.com/recliners?src=explore_categories", imgSrc: "https://peachtreehome.in/cdn/shop/files/PTH0010.webp?v=1733734269" },
        { href: "https://www.urbanladder.com/coffee-table?src=explore_categories", imgSrc: "https://cdn.decornation.in/wp-content/uploads/2020/02/wooden-coffee-table-4-stool.png" },
        { href: "https://www.urbanladder.com/study-room-furniture?src=explore_categories", imgSrc: "https://www.ulcdn.net/media/web-home-popular-categories/Study.png?1727341299" },
        { href: "https://www.urbanladder.com/oasis-collection-hlp?src=explore_categories", imgSrc: "https://www.ulcdn.net/media/web-home-popular-categories/New_Arrivals.png?1727340001" }
      ].map((item, index) => (
        <a 
          key={index} 
          href={item.href} 
          className="hover:scale-105 transition-transform duration-300 flex-shrink-0"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border border-gray-700">
            <img 
              src={item.imgSrc} 
              alt={`Furniture ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        </a>
      ))}
    </div>
  </div>
</div>
      </header>

<footer id="about-section" className="bg-gray-800 text-white py-10 px-6">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
  {/* Company Overview */}
  <h2 className="text-3xl font-bold mb-4">About Our Furniture Collection</h2>
  <p className="max-w-2xl text-lg text-gray-150">
    Our furniture store is dedicated to bringing you high-quality, stylish, and affordable furniture. 
    We specialize in crafting modern and classic furniture pieces that enhance your living space. 
    With a focus on innovation and design, we ensure that every piece resonates with comfort and elegance.
  </p>
  <br></br>

  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{/* Popular Furniture Categories */}
<div>
<h2 className="text-xl font-bold text-yellow-200 mb-4">Popular Furniture Categories</h2>
<p className="text-gray-150">
  Bed, Beds By Design, Sofa Set, Wooden Sofa, Sofas By Design, Sofa Cum Bed, Double Bed, Single Bed, Queen Size Bed, King Size Bed, Chair, Wooden Table, Study Table, Study Chair, Wardrobe, Chest of Drawers, Futon, Loveseat, Dining Table Set, Dining Chair, Bookshelves, Shoe Rack, TV Units, Recliners, Furniture, Office Furniture, Office Table, Office Chair, 2 Seater Sofa, TV Cupboard, TV Showcase, TV Stand, Center Table.
</p>
</div>

{/* Popular Tableware Categories */}
<div>
<h2 className="text-xl font-bold text-yellow-200 mb-4">Popular Tableware Categories</h2>
<p className="text-gray-150">
  Shot Glass, Dinner Plates, Baking Tray, Forks, Dinner Set, Tumbler, Drinking Glass, Cutlery Holder, Tissue Holder, Bottle Opener, Spoons, Whiskey Glass, Kitchen Organizers, Hot Pot, Chef's Cap, Glass Jars, Kitchen Gloves, Kitchen Storage Containers, Bar Tools, Masala Box, Glass Bottles, Coasters, Cutlery Set, Knives Set, Oven Gloves, Aprons, Cake Stand, Fruit Basket, Spice Box, Beer Glass, Bowls, Oil Dispenser, Housewarming Gifts.
</p>
</div>

{/* Popular Decor Categories */}
<div>
<h2 className="text-xl font-bold text-yellow-200 mb-4">Popular Decor Categories</h2>
<p className="text-gray-150">
  Home Decor, Carpets, Mirrors, Study Lamps, Table Lamps, Bed Sheets, Floor Lamps, Wall Lights, Lighting, Ceiling Lights, Quilt, Wall Decor, Wall Mirror, Table Decor, Table Cover, Table Napkin, Table Mat, Cushion Cover, Table Runners, Home Furnishing, Wall Art, Showpiece, Artificial Plants, Photo Frame, Candle Stand, Clocks, Wall Clocks, Festive Lights, Candles, Bath Mat, Vases, Flower Vase, Bathroom Accessories, Bathroom Mirrors.
</p>
</div>

{/* Popular Mattress Categories */}
<div>
<h2 className="text-xl font-bold text-yellow-200 mb-4">Popular Mattress Categories</h2>
<p className="text-gray-150">
  Mattresses, Single Bed Mattresses, Double Bed Mattresses, King Size Mattresses, Queen Size Mattresses, Foam Mattress, Coir Mattress, Latex Mattress, Spring Mattress, Orthopaedic Mattress.
</p>
</div>

{/* Shop Furniture By Room */}
<div>
<h2 className="text-xl font-bold  text-yellow-200 mb-4">Shop Furniture By Room</h2>
<p className="text-gray-150">
  Living Room Furniture, Bedroom Furniture, Dining Room Furniture, Study Room Furniture, Bar Furniture, Balcony Furniture.
</p>
</div>

{/* Delivering In */}
<div>
<h2 className="text-xl font-bold text-yellow-200 mb-4">Delivering In</h2>
<p className="text-gray-150">
  Aanamalai, Ahmedabad, Ajmer, Alappuzha, Aler, Alibaug, Allahabad, Alleppey, Alwar, Alwaye, Amaravathi, Ambala, Ambarnath, Amdapur, Amtala, Anakapalle, Anand, Anikorai, Ankleshwar, Arakkonam, Arimpur... <span className="text-yellow-500 cursor-pointer">More</span>.
</p>
</div>

</div>

{/* Co-partner Section */}
<div className="text-center mt-10">
<h2 className="text-4xl font-bold text-yellow-200">Co-partner with Urban Ladder</h2>
</div>

{/* Copyright */}
<div className="text-center text-gray-100 text-sm mt-6">
&copy; 2025 Furniture Hub. All Rights Reserved.
</div>


</div>
</footer>
</div>
    )
}