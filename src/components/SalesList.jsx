import { useNavigate } from 'react-router-dom';

const SalesList = () => {
  const navigate = useNavigate();

  const sales = [
    { id: 1, productName: 'Producto Ejemplo 1', date: '2024-11-01', price: '$150.00' },
    { id: 2, productName: 'Producto Ejemplo 2', date: '2024-11-02', price: '$200.00' },
    { id: 3, productName: 'Producto Ejemplo 3', date: '2024-11-03', price: '$300.00' },
  ];

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="sales-list-container">
      <h2 className="text-center font-weight-bold">Compras Registradas</h2>
      <ul className="list-group">
        {sales.map((sale) => (
          <li key={sale.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{sale.productName}</strong>
              <p className="text-muted">Fecha: {sale.date}</p>
            </div>
            <span>{sale.price}</span>
          </li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handleExit}>Salir</button>
      </div>
    </div>
  );
};

export default SalesList;
