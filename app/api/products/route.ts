import { NextRequest, NextResponse } from 'next/server';
import { getProducts, ProductFilters } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const params = request.nextUrl.searchParams;

    const filters: ProductFilters = {};
    const category = params.get('category');
    const categories = params.get('categories');
    const search = params.get('search');
    const colors = params.get('colors');
    const fabrics = params.get('fabrics');
    const occasions = params.get('occasions');
    const inStock = params.get('inStock');
    const minPrice = params.get('minPrice');
    const maxPrice = params.get('maxPrice');
    const sortBy = params.get('sortBy') || 'created_at';
    const sortOrder = params.get('sortOrder') === 'asc' ? 'asc' : 'desc';

    if (category) {
      filters.category = category;
    }
    if (categories) {
      filters.categories = categories.split(',').map((value) => value.trim()).filter(Boolean);
    }
    if (search) {
      filters.search = search;
    }
    if (colors) {
      filters.colors = colors.split(',').map((value) => value.trim()).filter(Boolean);
    }
    if (fabrics) {
      filters.fabrics = fabrics.split(',').map((value) => value.trim()).filter(Boolean);
    }
    if (occasions) {
      filters.occasions = occasions.split(',').map((value) => value.trim()).filter(Boolean);
    }
    if (inStock === 'true') {
      filters.inStock = true;
    }
    if (minPrice) {
      filters.minPrice = Number(minPrice);
    }
    if (maxPrice) {
      filters.maxPrice = Number(maxPrice);
    }

    const products = await getProducts(filters, 0, sortBy, sortOrder);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Products API error:', error);
    return NextResponse.json({ error: 'Unable to fetch products' }, { status: 500 });
  }
}
