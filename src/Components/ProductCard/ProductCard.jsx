import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart, SfIconFavorite } from '@storefront-ui/react';

export default function ProductCard({img, title, desc, price}) {
  return (
    <div className="border h-[400px] w-[190px] my-2 md:w-[270px] border-neutral-200 rounded-md hover:shadow-lg">
      <div className="relative">
        <SfLink href="#" className="block">
          <img
            src="/src/assets/dummy.png"
            alt="Great product"
            className="object-cover h-auto rounded-md aspect-square"
            width="200"
            height="200"
          />
        </SfLink>
        <SfButton
          variant="tertiary"
          size="sm"
          square
          className="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <SfIconFavorite size="sm" />
        </SfButton>
      </div>
      <div className="px-4 py-2 border-t border-neutral-200">
        <SfLink href="#" variant="secondary" className="no-underline">
          {title}
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={0} max={5} />

          <SfLink href="#" variant="secondary" className="pl-1 no-underline">
            <SfCounter size="xs">{0}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-sm text-neutral-700">
          {desc}
        </p>
        <span className="block pb-2 font-bold typography-text-lg">${price}</span>
        <SfButton size="sm" slotPrefix={<SfIconShoppingCart size="sm" />}>
          Add to cart
        </SfButton>
      </div>
    </div>
  );
}
