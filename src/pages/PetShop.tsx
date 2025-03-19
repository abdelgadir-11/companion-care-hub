
import { Filter, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const PetShop = () => {
  // Mock product data
  const products = [
    {
      id: 1,
      name: "Premium Dog Food",
      price: 49.99,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Interactive Cat Toy",
      price: 24.99,
      rating: 4.5,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Adjustable Pet Collar",
      price: 19.99,
      rating: 4.7,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Cozy Pet Bed",
      price: 69.99,
      rating: 4.9,
      reviews: 75,
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Pet Grooming Kit",
      price: 39.99,
      rating: 4.6,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1625321150808-8b4f69e4b6fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Organic Pet Treats",
      price: 14.99,
      rating: 4.8,
      reviews: 102,
      image: "https://images.unsplash.com/photo-1534278931827-8a259344abe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Product categories
  const categories = ["Food & Treats", "Toys", "Accessories", "Beds & Furniture", "Grooming", "Health & Wellness"];

  return (
    <div className="page-container">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Pet Shop
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
          Premium Products For Your Pet
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover high-quality, vet-approved products for your furry companions.
        </p>
      </div>

      {/* Categories */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex space-x-2 min-w-min">
          <Button variant="outline" className="rounded-full">
            All Products
          </Button>
          {categories.map((category) => (
            <Button key={category} variant="ghost" className="rounded-full whitespace-nowrap">
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Filter and Sort */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Button variant="outline" size="sm" className="mr-2">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <span className="text-sm text-muted-foreground">Showing 6 of 48 products</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm mr-2">Sort by:</span>
          <select className="bg-transparent border-border rounded text-sm py-1 px-2">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {products.map((product) => (
          <div key={product.id} className="group bg-card border border-border rounded-xl overflow-hidden transition-all hover:shadow-md hover:border-primary/20">
            <div className="h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-medium">${product.price.toFixed(2)}</span>
                <div className="text-sm text-muted-foreground">
                  ★ {product.rating} ({product.reviews})
                </div>
              </div>
              <Button className="w-full">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Collection */}
      <div className="mb-16">
        <div className="rounded-2xl overflow-hidden">
          <div className="relative h-96">
            <img 
              src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Premium pet products"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-8 md:p-12 lg:p-16 max-w-md">
                <h2 className="text-3xl font-display font-medium text-white mb-4">Premium Collection</h2>
                <p className="text-white/80 mb-6">
                  Discover our selection of premium pet products, designed for comfort and durability.
                </p>
                <Button variant="default" className="bg-white text-primary hover:bg-white/90">
                  Shop Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-display font-medium mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category} className="relative rounded-xl overflow-hidden h-40 group">
              <img 
                src={`https://source.unsplash.com/featured/?pet,${category.toLowerCase()}`} 
                alt={category}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="p-4 text-lg font-medium text-white">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetShop;
