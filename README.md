## This week you’ll be building an e-commerce shopping site for a fake brand. It doesn’t need to actually take payments or have a checkout, but it should have product listings and the ability to add items to a shopping basket.

<img width="994" alt="Screenshot 2021-05-21 at 11 51 37" src="https://user-images.githubusercontent.com/64862888/119126520-04b0fc80-ba2b-11eb-90eb-58e7d602587c.png">

## Acceptance criteria 
- Server-rendered with Next.js ✔️
- Hosted on Vercel  ✔️
- Data stored in AWS Postgres  ✔️
- Homepage with product listings  ✔️
- Individual product pages, containing: Quantity/colour/variant pickers ❎
- “Add to basket” button  ✔️
- Basket page showing all items being purchased  ❎
- Basket contents saved for future visits  ❎

## Stretch criteria 
- Filter products by category  ❎
- Sort products by price  ❎
- “Featured” products on homepage  ❎

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
