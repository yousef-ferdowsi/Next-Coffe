import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Result from "@/components/templates/Search/Result";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function Search({ data }) {
  const router = useRouter();

  useEffect(() => {
    // اینجا می‌توانید هر عملی را که می‌خواهید بعد از بارگذاری صفحه انجام دهید، قرار دهید
    // به عنوان مثال، می‌توانید کادر جستجو را پاک کنید
  }, [router.query.q]); // وابسته به تغییرات query.q

  return (
    <>
      <PageHeader route="Search" />
      <Result searchResult={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();

  const searchResult = data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
  );

  return {
    props: {
      data: searchResult,
    },
  };
}

export default Search;
