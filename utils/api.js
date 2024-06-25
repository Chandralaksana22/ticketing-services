import axios from 'axios';

const apiUrl = 'https://balitiket.mindimedia.com/api/v1';

export const getVendors = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-list-vendor`);
    return response.data;
  } catch (error) {
    console.error('Error fetching vendors:', error);
    throw error;
  }
};

export const getBaliZooPopular = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-popular-product-2?slug=bali-zoo`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching vendor detail for:`, error);
    throw error;
  }
};
export const getBaliZooPopularGA = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-popular-product-2?slug=bali-zoo`);
    const products = response.data;

    const generalAdmissionProducts = products.filter(product => product.type === 'general admission');

    return generalAdmissionProducts;
  } catch (error) {
    console.error(`Error fetching vendor detail for:`, error);
    throw error;
  }
};

export const getBaliBirdPopular = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-popular-product-2?slug=bali-bird-park`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching vendor detail for:`, error);
    throw error;
  }
};

export const getBaliFarmPopular = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-popular-product-2?slug=bali-farm-house`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching vendor detail for:`, error);
    throw error;
  }
};
export const getBaliSafariPopular = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-popular-product-2?slug=bali-safari`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching vendor detail for:`, error);
    throw error;
  }
};


export const getVendorDetail = async (slug) => {
  try {
    const response = await axios.get(`${apiUrl}/get-detail-vendor?slug=${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching vendor detail for slug ${slug}:`, error);
    throw error;
  }
};
export const getPopularProduct = async (slug) => {
  try {
    const response = await axios.get(`${apiUrl}/get-popular-product-2?slug=${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching popular products for slug ${slug}:`, error);
    throw error;
  }
};

export const getProduct = async (slug) => {
  try {
    const response = await axios.get(`${apiUrl}/get-product?slug=${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching popular products for slug ${slug}:`, error);
    throw error;
  }
};
export const getProductBaliZoo = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-product?slug=Bali-Zoo`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching popular products for slug ${slug}:`, error);
    throw error;
  }
};
export const getProductBaliSafari = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-product?slug=Bali-Safari`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching popular products for slug ${slug}:`, error);
    throw error;
  }
};
export const getProductBaliFarm = async () => {
  try {
    const response = await axios.get(`${apiUrl}/get-product?slug=Bali-Farm-House`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching popular products for slug ${slug}:`, error);
    throw error;
  }
};

export const getProductDetail = async (vendorSlug, productSlug) => {
  try {
    const response = await axios.get(`${apiUrl}/get-detail-product?vendor=${vendorSlug}&product=${productSlug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product detail for vendor ${vendorSlug} and product ${productSlug}:`, error);
    throw error;
  }
};

export const getTicketInformation = async (vendorSlug, productSlug, adults, children, infants, date) => {
  try {
    const response = await axios.get(`${apiUrl}/get-form-list-ticket?vendor=${vendorSlug}&product=${productSlug}&children=${children}&adult=${adults}&infant=${infants}&date=${date.toISOString().split('T')[0]}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ticket information:', error);
    throw new Error('Failed to fetch ticket information');
  }
};