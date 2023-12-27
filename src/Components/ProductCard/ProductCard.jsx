import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart, SfIconFavorite } from '@storefront-ui/react';
import { Link } from 'react-router-dom';

export default function ProductCard({id, img, title, desc, price, rating}) {
  // console.log(rating)
  return (
    <div className="border h-[400px] w-[38vw] my-2 md:w-[270px] border-neutral-200 rounded-md hover:shadow-lg">
      <div className="relative h-[50%]">
          <img
            src={img}
            alt="Great product"
            className="h-full w-[60%] object-center rounded-t-md mx-auto"
          />

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
      <div className="px-4 py-2 border-t h-[50%] border-neutral-200 flex flex-col justify-center">
        <Link to={`/products/${id}`}>
        <SfLink variant="secondary" className="no-underline line-clamp-2">
          {title}
        </SfLink>
        </Link>
        <div className=" flex items-center">
          <SfRating size="xs" value={rating.rate} max={5} />

          <SfLink href="#" variant="secondary" className="pl-1 no-underline">
            <SfCounter size="xs">{rating.count}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-sm text-neutral-700 line-clamp-2">
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
