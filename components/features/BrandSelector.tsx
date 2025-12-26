import { Brand } from '@/types/brand';

interface BrandSelectorProps {
  brands: Brand[];
  selectedBrandId: string;
  onChange: (id: string) => void;
}

export function BrandSelector({
  brands,
  selectedBrandId,
  onChange,
}: BrandSelectorProps) {
  return (
    <select
      value={selectedBrandId}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-md border px-3 py-2 text-sm"
    >
      {brands.map((brand) => (
        <option key={brand.id} value={brand.id}>
          {brand.name}
        </option>
      ))}
    </select>
  );
}