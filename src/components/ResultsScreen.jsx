import { useLocation, useNavigate } from 'react-router-dom';

const ResultsScreen = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search');
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Producto 1',
      category: 'Electrónica',
      description: 'Descripción del producto 1',
      price: '$100.00',
      rating: 4,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Producto 2',
      category: 'Ropa',
      description: 'Descripción del producto 2',
      price: '$50.00',
      rating: 5,
      image: 'https://via.placeholder.com/100',
    },
  ];

  const handleProductClick = (id) => {
    navigate(`/item/${id}`);
  };

  const handleSearchInputChange = (event) => {
    console.log(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const searchValue = event.target.value.trim();
      if (searchValue) {
        navigate(`/items?search=${searchValue}`);
      }
    }
  };

  const handleLogoClick = () => {
    navigate('/sales');
  };

  return (
    <div className="results-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <img
          src="/public/images/logo.png"
          alt="Logo"
          className="mb-4"
          style={{ width: '50px', cursor: 'pointer' }}
          onClick={handleLogoClick} // Redirige a /sales al hacer clic en el logo
        />
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar más productos..."
            aria-label="Buscar producto"
            onChange={handleSearchInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className="mb-4">
        <h3>Resultados de la búsqueda de: <strong>{query}</strong></h3>
      </div>

      <div className="row">
        {products.map(product => (
          <div className="col-12 mb-4" key={product.id} onClick={() => handleProductClick(product.id)} style={{ cursor: 'pointer' }}>
            <div className="d-flex align-items-center">
              <div className="col-4">
                <img src={product.image} alt={product.name} className="rounded-circle" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              </div>
              <div className="col-8">
                <div className="row">
                  <div className="col-12">
                    <h5>{product.name}</h5>
                  </div>
                  <div className="col-12">
                    <p className="text-muted">{product.category}</p>
                  </div>
                  <div className="col-12">
                    <p>{product.description}</p>
                  </div>
                  <div className="col-12 d-flex justify-content-between align-items-center">
                    <span>{product.price}</span>
                    <span>
                      {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsScreen;
