import "@/styles/Product.module.css";
import ProductsDetails  from "@/components/templates/Products/productDetails";
import Comments from "@/components/templates/Products/comments"
const Product = ({ product, comments }) => {
  return (
    <>
      <ProductsDetails data={product} />
      <Comments data={comments} />
    </>
  );
};

export async function getStaticPaths(context) {
  const res = await fetch(`http://localhost:4000/menu`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const productResponse = await fetch(
    `http://localhost:4000/menu/${params.id}`
  );
  const productData = await productResponse.json();

  const commentsResponse = await fetch(`http://localhost:4000/comments`);
  const comments = await commentsResponse.json();

  const productComments = comments.filter(
    (comment) => comment.productID === +params.id
  );

  return {
    props: {
      product: productData,
      comments: productComments,
    },
    revalidate: 60 * 60 * 12, // Second
  };
}

export default Product;
