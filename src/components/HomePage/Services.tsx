import { fetchEntries } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";
import React from "react";
import Product from "./Product";

async function Services() {
  const services = await fetchEntries("services");
  const products = await fetchEntries("products");

  if (
    !services ||
    services.length === 0 ||
    !products ||
    products.length === 0
  ) {
    return null;
  }

  const { title, subtitle } = services[0].fields;

  return (
    <>
      <Head>
        <title>Explore Our Chemical Products | LB Chemical Industries</title>
        <meta
          name="description"
          content="Browse our extensive catalog of chemical products including industrial, agricultural, and specialty solutions tailored for your needs. You can find all chemicals in LB Chemicals Industries."
        />
      </Head>
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-4xl font-bold text-gray-900 mb-4">
              {documentToReactComponents(title)}
            </div>
            <div className="text-xl text-gray-600 max-w-3xl mx-auto">
              {documentToReactComponents(subtitle)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-12">
            {products.map((product, index) => {
              const {
                metaTitle,
                metaDescription,
                image,
                company,
                name,
                subdetails,
                desclist,
                specs,
              } = product.fields;

              return (
                <Product
                  key={index}
                  index={index}
                  metaTitle={metaTitle}
                  metaDescription={metaDescription}
                  image={image}
                  company={company}
                  name={name}
                  subdetails={subdetails}
                  desclist={desclist}
                  pdf={specs}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
