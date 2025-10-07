# Farmer-to-Consumer Platform

## Background Research

Traditional farming sales often rely on middlemen and wholesalers, which can reduce profit margins for farmers and create a disconnect between producers and consumers. Direct marketing approaches, where farmers sell directly to customers, have been shown to increase profits for farmers and improve transparency. Customers benefit by receiving fresher produce and contributing to the local economy.

## Existing Solutions

Several platforms exist that connect farmers directly to consumers. However, these solutions frequently face challenges such as:
- Limited reach to local customers.
- Complex user interfaces that are difficult for farmers and customers to navigate.
- Inadequate support for direct communication or transactions.

## Current Issues

Despite existing platforms, the following issues persist:
- Lack of direct contact between farmers and local customers.
- Middlemen continue to reduce profit margins for farmers.
- Customers often have limited accessibility to fresh, locally produced goods.

## Objective

This project aims to build a user-friendly platform that enables direct communication and transaction between customers and nearby farmers. The goal is to:
- Empower farmers by maximizing their profits and market transparency.
- Provide customers with easy access to fresh, locally grown products.
- Strengthen the local economy by supporting direct sales.

## Technology Stack

**Frontend:**  
- HTML, CSS, JavaScript  
- Bootstrap  
- React

**Backend:**  
- Node.js  
- Express.js

**Database:**  
- MongoDB

**Development Tools:**  
- Visual Studio Code (VS Code)

## Entities and Relationships

- **Farmer:** Name, Location, Products, Contact Information
- **Customer:** Name, Location, Preferences, Contact Information
- **Product:** Product Name, Category, Price, Availability, Farmer ID

### Database Diagram

- **Farmer → Product:** One-to-Many relationship (a farmer can offer multiple products)
- **Customer ↔ Product:** Many-to-Many relationship through Orders (customers can purchase multiple products; products can be purchased by multiple customers)

```
Farmer (1) -----------< (Many) Product
Customer (Many) <>------ (Many) Product (via Orders)
```

## Features

- Direct registration and listing for farmers.
- Product catalog with real-time availability and pricing.
- Customer profiles with location-based product recommendations.
- Secure order placement and management.
- Messaging system for direct farmer-customer communication.

## Getting Started

1. Clone the repository.
2. Install dependencies for both frontend and backend.
3. Set up MongoDB and configure connection details.
4. Run the backend server.
5. Launch the frontend application.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
