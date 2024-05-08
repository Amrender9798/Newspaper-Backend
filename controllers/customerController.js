import Customer from '../models/customerModel.js';

export async function createCustomer(req, res) {
  try {
    const { name, balance } = req.body;
    const customer = new Customer({ name, balance });
    await customer.save();
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllCustomers(req, res) {
  try {
    const customers = await Customer.find();
    const totalBalance = customers.reduce((total, customer) => total + customer.balance, 0);
    res.json({customers,totalBalance});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCustomerById(req, res) {
  try {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateCustomerBalance(req, res) {
  try {
    const { balance } = req.body;
    const customer = await Customer.findByIdAndUpdate(req.params.id, { balance }, { new: true });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateCustomerName(req, res) {
  try {
    const { name } = req.body;
    const customer = await Customer.findByIdAndUpdate(req.params.id, { name }, { new: true });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteCustomer(req, res) {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

