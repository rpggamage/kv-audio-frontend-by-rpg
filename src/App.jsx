import React from 'react';
import ProductCard from './components/ProductCard';

function App() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '50px' }}>
            {/* Product 1 */}
            <ProductCard 
                name="Aluminum Can" 
                price={1.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Eco-Friendly', 'Recyclable', 'Lightweight']} 
            />
            {/* Product 2 */}
            <ProductCard 
                name="Plastic Bottle" 
                price={2.49} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Reusable', 'Affordable', 'BPA-Free']} 
            />
            {/* Product 3 */}
            <ProductCard 
                name="Glass Jar" 
                price={3.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Sustainable', 'Non-Toxic', 'Customizable']} 
            />
            {/* Product 4 */}
            <ProductCard 
                name="Paper Bag" 
                price={0.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Biodegradable', 'Eco-Friendly', 'Compact']} 
            />
            {/* Product 5 */}
            <ProductCard 
                name="Wooden Spoon" 
                price={1.49} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Biodegradable', 'Handcrafted', 'Reusable']} 
            />
            {/* Product 6 */}
            <ProductCard 
                name="Stainless Steel Mug" 
                price={9.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Durable', 'Reusable', 'Insulated']} 
            />
            {/* Product 7 */}
            <ProductCard 
                name="Organic Cotton Tote" 
                price={4.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Eco-Friendly', 'Reusable', 'Vegan']} 
            />
            {/* Product 8 */}
            <ProductCard 
                name="Bamboo Toothbrush" 
                price={2.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Biodegradable', 'Sustainable', 'Non-Toxic']} 
            />
            {/* Product 9 */}
            <ProductCard 
                name="Silicone Food Bag" 
                price={5.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Reusable', 'Non-Toxic', 'Dishwasher-Safe']} 
            />
            {/* Product 10 */}
            <ProductCard 
                name="Compostable Phone Case" 
                price={14.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Biodegradable', 'Eco-Friendly', 'Slim']} 
            />
            {/* Product 11 */}
            <ProductCard 
                name="Recycled Notebook" 
                price={7.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Recyclable', 'Eco-Friendly', 'Durable']} 
            />
            {/* Product 12 */}
            <ProductCard 
                name="Solar Charger" 
                price={29.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Energy-Efficient', 'Portable', 'Sustainable']} 
            />
            {/* Product 13 */}
            <ProductCard 
                name="Reusable Straw Set" 
                price={6.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Reusable', 'Eco-Friendly', 'Compact']} 
            />
            {/* Product 14 */}
            <ProductCard 
                name="Beeswax Wraps" 
                price={8.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Biodegradable', 'Reusable', 'Non-Toxic']} 
            />
            {/* Product 15 */}
            <ProductCard 
                name="Cork Yoga Mat" 
                price={39.99} 
                image="https://images.unsplash.com/photo-1584697964388-cd06f0a1b285?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                tags={['Eco-Friendly', 'Durable', 'Non-Slip']} 
            />
        </div>
    );
}

export default App;