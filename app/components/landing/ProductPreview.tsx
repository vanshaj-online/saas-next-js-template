import ProductMockup from './ProductMockup'
import { SectionHeader } from './SectionHeader'

export function ProductPreview() {
  return (
    <section id="product" className="relative py-32 overflow-hidden px-pad-sm">
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeader
          label="The product"
          heading={["A window into how your", "team actually works"]}
        />
      </div>

      <ProductMockup />
    </section>
  )
}
