import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductDetails = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const product = {
    id: 1,
    name: 'Producto Ejemplo',
    category: 'Electrónica',
    description: 'Este es un producto de prueba que muestra la descripción detallada.',
    price: '$150.00',
    rating: 4,
    image: 'https://via.placeholder.com/100',
    images: [
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ]
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchEnter = (event) => {
    if (event.key === 'Enter') {
      navigate(`/items?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handlePurchase = () => {
    navigate('/sales');
  };

  return (
    <div className="product-details-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <img
          src="/public/images/logo.png"
          alt="Logo"
          className="mb-4"
          style={{ width: '50px', cursor: 'pointer' }}
          onClick={handlePurchase}
        />
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar productos..."
            aria-label="Buscar producto"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchEnter}
          />
        </div>
      </div>

      <div className="d-flex justify-content-between mb-4">
        {product.images.map((img, index) => (
          <div key={index} className="circle-image-container">
            <img src={img} alt={`Imagen ${index + 1}`} className="rounded-circle" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      <div className="product-name mb-2 text-center">
        <h3>{product.name}</h3>
      </div>

      <div className="product-category mb-4 text-center">
        <p className="text-muted">{product.category}</p>
      </div>

      <div className="product-description mb-4">
        <p>{product.description}</p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <span>{product.price}</span>
        <span>
          {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
        </span>
      </div>

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handlePurchase}>Comprar</button>
      </div>
    </div>
  );
};

export default ProductDetails;
