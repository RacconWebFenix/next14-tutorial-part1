import { notFound } from "next/navigation";
import React from "react";

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      Reviel Details {params.reviewId} for product {params.productId}
    </div>
  );
}