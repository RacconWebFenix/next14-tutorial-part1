import { Metadata } from "next";


type Props = {
  params: { productId: string };
};

// O nome da função aki importa. Precisa ser generateMetadata
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Notebook ${params.productId}`)
    }, 100)
  })
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <div>Details about product {params.productId}</div>;
}
